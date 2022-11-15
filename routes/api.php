<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\crmLoginController;
use App\Http\Controllers\chatController;
use App\Http\Controllers\tuckController;
use App\Http\Controllers\testchatController;

/*
|---------------------------------------------------------------------	-----
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::any('/signup', [crmLoginController::class, 'signup']);
Route::any('/login', [crmLoginController::class, 'login']);
Route::any('/userdirectory', [chatController::class, 'userdirectory']);
Route::middleware('login.check')->group(function(){	
Route::any('/logout', [crmLoginController::class, 'logout']);
Route::any('/userextension', [crmLoginController::class, 'userextension']);

Route::any('/sendMessage', [chatController::class, 'sendMessage']);
Route::any('/fetchMessage', [chatController::class, 'fetchMessage']);
Route::any('/getContactsUser', [chatController::class, 'getContactsUser']);
Route::any('/getContactsTotal', [chatController::class, 'getContactsTotal']);
Route::any('/searchUser', [chatController::class, 'searchUser']);
Route::any('/download', [chatController::class, 'download']);
Route::any('/makeSeen', [chatController::class, 'makeSeen']);
Route::any('/unseen', [chatController::class, 'unseen']);
Route::any('/fetchMessageGroup', [chatController::class, 'fetchMessageGroup']);
Route::any('/getUserGroups', [chatController::class, 'getUserGroups']);
Route::any('/getAllGroups', [chatController::class, 'getAllGroups']);
Route::any('/createGroup', [chatController::class, 'createGroup']);
Route::any('/updateGroup', [chatController::class, 'updateGroup']);
Route::any('/archiveGroup', [chatController::class, 'archiveGroup']);
Route::any('/addmember', [chatController::class, 'addmember']);
Route::any('/removemember', [chatController::class, 'removemember']);
Route::any('/groupparticipants', [chatController::class, 'groupparticipants']);
Route::any('/makegroupmessageseen', [chatController::class, 'makegroupmessageseen']);
Route::any('/fetchMoreMessage', [chatController::class, 'fetchMoreMessage']);
Route::any('/fetchMoreMessageGroup', [chatController::class, 'fetchMoreMessageGroup']);
Route::any('/fetchAttachments', [chatController::class, 'fetchAttachments']);
Route::any('/fetchGroupAttachments', [chatController::class, 'fetchGroupAttachments']);
Route::any('/getSignupUsers', [chatController::class, 'getSignupUsers']);
Route::any('/approveDeclineSignupUsers', [chatController::class, 'approveDeclineSignupUsers']);
Route::any('/getApproveUsers', [chatController::class, 'getApproveUsers']);
Route::any('/getDeclineUsers', [chatController::class, 'getDeclineUsers']);
Route::any('/deletemessage', [chatController::class, 'deletemessage']);
Route::any('/deletegroupmessage', [chatController::class, 'deletegroupmessage']);
Route::any('/deletegroup', [chatController::class, 'deletegroup']);
Route::any('/fetchAllSeenUsers', [chatController::class, 'fetchAllSeenUsers']);

Route::any('/tuckcategorylist', [tuckController::class, 'tuckcategorylist']);
Route::any('/tuckproductlist', [tuckController::class, 'tuckproductlist']);
Route::any('/tuckcreateorder', [tuckController::class, 'tuckcreateorder']);

Route::any('/testgetUserGroups', [testchatController::class, 'testgetUserGroups']);
});