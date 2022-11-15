<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\File;
use Image;
use DB;
use Input;
use App\Item;
use Session;
use Response;
use Validator;

class crmLoginController extends Controller
{
	public function signup(Request $request){
        // dd($request);
        $validate = Validator::make($request->all(), [ 
            'elsemployees_name'     => 'required',
            'elsemployees_fname'    => 'required',
            'elsemployees_cnic'     => 'required',
            'elsemployees_cno'      => 'required',
            'elsemployees_email'    => 'required',
            'elsemployees_password' => 'required',
            'elsemployees_dofbirth' => 'required',
            'elsemployees_address'  => 'required',
        ]);
        if ($validate->fails()) {    
            return response()->json("Fields Required", 400);
        }
        $validate = Validator::make($request->all(), [ 
		    'elsemployees_email' 		=> 'unique:elsemployees,elsemployees_email',
		]);
		if ($validate->fails()) {    
			return response()->json("Email Already Exist", 400);
		}
        if($request->hasFile('elsemployees_image') && $request->elsemployees_image[0]->isValid()){
            $number = rand(1,999);
            $numb = $number / 7 ;
            $extension = $request->elsemployees_image[0]->extension();
            $filename  = session()->get("email")."_".date('Y-m-d')."_.".$numb."_.".$extension;
            $filename = $request->elsemployees_image[0]->move(public_path('img'),$filename);
            $img = Image::make($filename)->resize(800,800, function($constraint) {
                $constraint->aspectRatio();
            });
            $img->save($filename);
            $filename = session()->get("email")."_".date('Y-m-d')."_.".$numb."_.".$extension;
        }else{
                
                $filename = 'no_image.jpg';    
        }
        $batchid = mt_rand(1000, 9999);
        $adds[] = array(
        'elsemployees_batchid'    => $batchid,
        'elsemployees_name'       => $request->elsemployees_name,
        'elsemployees_fname'      => $request->elsemployees_fname,
        'elsemployees_cnic'       => $request->elsemployees_cnic,
        'elsemployees_cno'        => $request->elsemployees_cno,
        'elsemployees_email'      => $request->elsemployees_email,
        'elsemployees_password'   => $request->elsemployees_password,
        'elsemployees_image'      => $filename,
        'elsemployees_dofbirth'   => $request->elsemployees_dofbirth,
        'elsemployees_address'    => $request->elsemployees_address,
        'elsemployees_dofjoining' => date('Y-m-d'),
        'elsemployees_roleid'     => 4,
        'elsemployees_status'     => 3,
        'elsemployees_addby'      => $request->user_id,
        );
        $save = DB::table('elsemployees')->insert($adds);
        if($save){
            return response()->json(['message' => 'Signup Successfully'],200);
        }else{
            return response()->json("Oops! Something Went Wrong", 400);
        }
    }
	public function login(Request $request){
	    $validate = Validator::make($request->all(), [ 
		      'email' 		=> 'required',
		      'password'	=> 'required',
		    ]);
	     	if ($validate->fails()) {    
				return response()->json("Enter Credentials To Sign In", 400);
			}
			$getprofileinfo = DB::table('elsemployees')
			->select('*')
			->where('elsemployees_email','=',$request->email)
			->where('elsemployees_password','=',$request->password)
			->where('elsemployees_status','=',2)
			->first();
			if($getprofileinfo){
			$updateuser  = DB::table('elsemployees')
			->where('elsemployees_empid','=',$getprofileinfo->elsemployees_empid )
			->update([
			'user_loginstatus' 		=> "Online",
			]); 
				return response()->json(['data' => $getprofileinfo,'message' => 'Login Successfully'],200);
			}else{
				return response()->json('Invalid Email Or Password', 400);
			}
	}
	public function logout(Request $request){
		$logoutuser  = DB::table('elsemployees')
			->where('elsemployees_empid','=',$request->user_id)
			->update([
			'user_loginstatus' 		=> "Offline",
		]); 
		return response()->json('Logout Successfully',200);
	}
	public function userextension(Request $request){
    	$getextension = DB::table('elsemployees')
		->select('elsemployees_ext')
		->where('elsemployees_empid ','=',$request->user_id)
		->first();
		return response()->json(['data' => $getextension],200);
	}
}