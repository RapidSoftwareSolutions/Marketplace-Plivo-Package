[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Plivo/functions?utm_source=RapidAPIGitHub_PlivoFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Plivo Package
Global SMS & Voice calls for businesses of all sizes
* Domain: plivo.com
* Credentials: authId, authToken

## How to get credentials: 
1. Go to [Plivo dashboard](https://manage.plivo.com/dashboard/)
2. Copy and save your `AUTH ID` and `AUTH TOKEN`.
 
## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```

## Plivo.getAccountDetails
You can call this API to retrieve details like email address, cash credits, postal address, auto recharge settings, etc which is associated with your Plivo account. Returns an object representing your Plivo account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.


## Plivo.updateAccount
If you would like to modify your account details, you could do so with this API. You can make changes to the name, city and the address fields.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| name     | String     | Name of the account holder or business.
| city     | String     | City of the account holder.
| address  | String     | Address of the account holder.


## Plivo.createSubaccount
A subaccount is an account that is owned by a parent account. Using a subaccount makes it easier to segment, manage, and keep track of the account usages of each user independently.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| name     | String     | Required: Name of the subaccount
| enabled  | String     | Specify if the subaccount should be enabled or not. Takes a value of True or False. Defaults to False


## Plivo.updateSubaccount
If you would like to modify your subaccount, you could do so with this API. You can make changes to the name of the subaccount and specify whether to enable or disable it.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| subauthId| String     | Required: Valid subauthId
| name     | String     | Required: Name of the subaccount
| enabled  | String     | Specify if the subaccount should be enabled or not. Takes a value of True or False. Defaults to False


## Plivo.getSingleSubaccount
You can call this API to retrieve details of a subaccount like auth_id, auth_token, etc. Returns an object representing your Plivo subaccount.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| subauthId| String     | Required: Valid subauthId.


## Plivo.getSubaccounts
You can get details of all subaccounts associated with your main Plivo account. We return a list of all subaccounts.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| offset   | credentials| Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.
| limit    | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.


## Plivo.deleteSubaccount
You can delete a subaccount with this API. This API would delete the subaccount and associate all Number, Endpoints and Applications (which are linked to the subaccount) to the main Plivo account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| subauthId| String     | Required: Valid subauthId.


## Plivo.createApplication
Create an application on Plivo by calling this API. Creating an application is usually the first step, after which you would attach this application either to a number or an endpoint.

| Field             | Type       | Description
|-------------------|------------|----------
| authToken         | credentials| Required: Valid authToken.
| authId            | credentials| Required: Valid authId.
| answerUrl         | String     | Required: The URL Plivo will fetch when a call executes this application.
| appName           | String     | Required: The name of your application
| answerMethod      | String     | The method used to call the answer_url. Defaults to POST.
| hangupUrl         | String     | The URL that will be notified by Plivo when the call hangs up. Defaults to answer_url. More details
| hangupMethod      | String     | The method used to call the hangup_url. Defaults to POST.
| fallbackAnswerUrl | String     | Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
| fallbackMethod    | String     | The method used to call the fallback_answer_url. Defaults to POST.
| messageUrl        | String     | The URL that will be notified by Plivo when an inbound message is received. Defaults not set. More details
| messageMethod     | String     | The method used to call the message_url. Defaults to POST.
| defaultNumberApp  | String     | Boolean parameter. If set to true, this parameter ensures that newly created numbers, which don't have an app_id, point to this application.
| defaultEndpointApp| String     | Boolean parameter. If set to true, this parameter ensures that newly created endpoints, which don't have an app_id, point to this application.
| subaccount        | String     | Id of the subaccount, in case only subaccount applications are needed.


## Plivo.getApplications
Theis API is used to get details of all the application that have been created under your Plivo account.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| subaccount| String     | Id of the subaccount, in case only subaccount applications are needed.
| limit     | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset    | String     | Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.


## Plivo.getSingleApplication
Get details of an particular application by passing the app_id. This API returns all the information linked with the application.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| appId    | String     | Required: Valid appId.


## Plivo.updateApplication
Modify an application using this API.

| Field             | Type       | Description
|-------------------|------------|----------
| authToken         | credentials| Required: Valid authToken.
| authId            | credentials| Required: Valid authId.
| appId             | credentials| Required: Valid appId.
| answerUrl         | String     | The URL Plivo will fetch when a call executes this application.
| answerMethod      | String     | The method used to call the answer_url. Defaults to POST.
| hangupUrl         | String     | The URL that will be notified by Plivo when the call hangs up. Defaults to answer_url. More details
| hangupMethod      | String     | The method used to call the hangup_url. Defaults to POST.
| fallbackAnswerUrl | String     | Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
| fallbackMethod    | String     | The method used to call the fallback_answer_url. Defaults to POST.
| messageUrl        | String     | The URL that will be notified by Plivo when an inbound message is received. Defaults not set. More details
| messageMethod     | String     | The method used to call the message_url. Defaults to POST.
| defaultNumberApp  | String     | Boolean parameter. If set to true, this parameter ensures that newly created numbers, which don't have an app_id, point to this application.
| defaultEndpointApp| String     | Boolean parameter. If set to true, this parameter ensures that newly created endpoints, which don't have an app_id, point to this application.
| subaccount        | String     | Id of the subaccount, in case only subaccount applications are needed.


## Plivo.deleteApplication
This API would delete the Plivo application. Use this API wisely, once an application is deleted, it cannot be retrived.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| appId    | String     | Required: Valid appId.


## Plivo.makeCall
The following API enables you to make a single call or bulk outbound calls to real phone(s) or SIP endpoint(s).

| Field                 | Type       | Description
|-----------------------|------------|----------
| authToken             | credentials| Required: Valid authToken.
| authId                | credentials| Required: Valid authId.
| callFrom              | String     | Required: The phone number to be used as the caller id (with the country code).For e.g, a USA caller id number could be, 15677654321, with '1' for the country code.
| callTo                | String     | Required: The regular number(s) or sip endpoint(s) to call. Regular number must be prefixed with country code but without the + sign). For e.g, to dial a number in the USA, the number could be, 15677654321, with '1' for the country code. Multiple numbers can be sent by using a delimiter. For e.g. 15677654321<12077657621<12047657621. Sip endpoints must be prefixed with sip: E.g., sip:john1234@phone.plivo.com. To make bulk calls, the delimiter < is used. For example, 15677654321<15673464321<sip:john1234@phone.plivo.com Yes, you can mix regular numbers and sip endpoints.
| answerUrl             | String     | Required: The URL invoked by Plivo when the outbound call is answered.
| answerMethod          | String     | The method used to call the answer_url. Defaults to POST.
| ringUrl               | String     | The URL that is notified by Plivo when the call is ringing. Defaults not set.
| ringMethod            | String     | The method used to call the ring_url. Defaults to POST.
| hangupUrl             | String     | The URL that is notified by Plivo when the call hangs up. Defaults to answer_url.
| hangupMethod          | String     | The method used to call the hangup_url. Defaults to POST.
| fallbackUrl           | String     | Invoked by Plivo only if answer_url is unavailable or the XML response is invalid. Should contain a XML response.
| fallbackMethod        | String     | The method used to call the fallback_url. Defaults to POST.
| callerName            | String     | Caller name to use with the call.
| sendDigits            | String     | Plivo plays DTMF tones when the call is answered. This is useful when dialing a phone number and an extension. Plivo will dial the number, and when the automated system picks up, sends the DTMF tones to connect to the extension. E.g. If you want to dial the 2410 extension after the call is connected, and you want to wait for a few seconds before sending the extension, add a few leading 'w' characters. Each 'w' character waits 0.5 second before sending a digit. Each 'W' character waits 1 second before sending a digit. You can also add the tone duration in ms by appending @duration after the string (default duration is 2000 ms). For example, 1w2w3@1000 See the DTMF API for additional information.
| sendOnPreanswer       | String     | If set to true and send_digits is also set, digits are sent when the call is in preanswer state. Defaults to false.
| timeLimit             | String     | Schedules the call for hangup at a specified time after the call is answered. Value should be an integer > 0(in seconds).
| hangupOnRing          | String     | Schedules the call for hangup at a specified time after the call starts ringing. Value should be an integer >= 0 (in seconds).
| machineDetection      | String     | Used to detect if the call has been answered by a machine. The valid values are true and hangup. Default time to analyze is 5000 milliseconds (or 5 seconds). You can change it with the machine_detection_time parameter. Note that no XML is processed during the analysis phase. If a machine is detected during the call and machine_detection is set to true, the Machine parameter will be set to true and will be sent to the answer_url, hangup_url, or any other URL that is invoked by the call. If a machine is detected during the call and machine_detection is set to hangup, the call hangs up immediately and a request is made to the hangup_url with the Machine parameter set to true
| machineDetectionTime  | String     | Time allotted to analyze if the call has been answered by a machine. It should be an integer >= 2000 and <= 10000 and the unit is ms. The default value is 5000 ms.
| machineDetectionUrl   | String     | A URL where machine detection parameters will be sent by Plivo. This parameter should be used to make machine detection asynchronous
| machineDetectionMethod| String     | The HTTP method which will be used by Plivo to request the machine_detection_url. Defaults to POST.
| sipHeaders            | String     | List of SIP headers in the form of 'key=value' pairs, separated by commas. E.g. head1=val1,head2=val2,head3=val3,...,headN=valN. The SIP headers are always prefixed with X-PH-. The SIP headers are present for every HTTP request made by the outbound call. Only [A-Z], [a-z] and [0-9] characters are allowed for the SIP headers key and value. Additionally, the '%' character is also allowed for the SIP headers value so that you can encode this value in the URL.
| ringTimeout           | String     | Determines the time in seconds the call should ring. If the call is not answered within the ring_timeout value or the default value of 120s, it is canceled.
| parentCallUuid        | String     | The call_uuid of the first leg in an ongoing conference call. It is recommended to use this parameter in scenarios where a member who is already present in the conference intends to add new members by initiating outbound API calls. This minimizes the delay in adding a new memeber to the conference.
| errorIfParentNotFound | String     | if set to true and the parent_call_uuid cannot be found, the API request would return an error. If set to false, the outbound call API request will be executed even if the parent_call_uuid is not found. Defaults to false.


## Plivo.getCallsDetails
The following API enables you to get information about all completed calls. The maximum number of results that can be fetched with a single API call is 20.

| Field        | Type       | Description
|--------------|------------|----------
| authToken    | credentials| Required: Valid authToken.
| authId       | credentials| Required: Valid authId.
| callDirection| String     | Filter the results by call direction. The valid inputs are inbound and outbound.
| fromNumber   | String     | Filter the results by the number from where the call originated.
| toNumber     | String     | Filter the results by the number to which the call was made.
| billDuration | String     | Filter the results according to billed duration.
| endTime      | String     | Filter out calls according to the time of completion.
| limit        | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset       | String     | Denotes the number of value items by which the results should be offset. E.g., If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.


## Plivo.getSingleCallDetails
The following API enables you to get information about all completed calls. The maximum number of results that can be fetched with a single API call is 20.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.


## Plivo.getLiveCalls
Get all current active calls made from an account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.


## Plivo.getSingleLiveCallDetails
Get information on an active call.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.


## Plivo.hangupSingleCall
Hangup an incoming or outgoing call.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.


## Plivo.hangupCalls
Hangup all incoming or outgoing calls.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.


## Plivo.transferCall
This API enables an in-progress or active call to a different URL and fetch and execute XML from a new URL. If the call (the A leg) is in a Dial, you can also transfer the other party (the B leg) at the same time or only transfer the B leg to an URL. This is useful for many applications where you want to asynchronously change the behavior of a live call. For example, you can play music while the call is on hold, queue calls, transfer calls etc.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| callUuid  | String     | Required: Valid callUuid.
| legs      | String     | aleg, bleg or both Defaults to aleg. aleg will transfer call_uuid ; bleg will transfer the bridged leg (if found) of call_uuid ; both will transfer call_uuid and bridged leg of call_uuid
| alegUrl   | String     | URL to transfer for aleg, if legs is aleg or both, then aleg_url has to be specified.
| alegMethod| String     | HTTP method to invoke aleg_url. Defaults to POST.
| blegUrl   | String     | URL to transfer for bridged leg, if legs is bleg or both, then bleg_url has to be specified.
| blegMethod| String     | HTTP method to invoke bleg_url. Defaults to POST.


## Plivo.recordCall
Record a Call

| Field              | Type       | Description
|--------------------|------------|----------
| authToken          | credentials| Required: Valid authToken.
| authId             | credentials| Required: Valid authId.
| callUuid           | String     | Required: Valid callUuid.
| timeLimit          | String     | Max recording duration in seconds. Defaults to 60.
| fileFormat         | String     | The format of the recording. The valid formats are mp3 and wav formats. Defaults to mp3.
| transcriptionType  | String     | The type of transcription required. The following values are allowed: auto - This is the default value. Transcription is completely automated; turnaround time is about 5 minutes. hybrid - Transcription is a combination of automated and human verification processes; turnaround time is about 10-15 minutes. 
| transcriptionUrl   | String     | The URL where the transcription is available.
| transcriptionMethod| String     | The method used to invoke the transcription_url. Defaults to POST.
| callbackUrl        | String     | The URL invoked by the API when the recording ends. The following parameters are sent to the callback_url: `api_id` - the same API ID returned by the call record API. `record_url` - the URL to access the recorded file. `call_uuid` - the call uuid of the recorded call. `recordingId` - the recording ID of the recorded call. `recordingDuration` - duration in seconds of the recording. `recordingDurationMs` - duration in milliseconds of the recording. `recordingStartMs` - when the recording started (epoch time UTC) in milliseconds. `recordingEndMs` - when the recording ended (epoch time UTC) in milliseconds.
| callbackMethod     | String     | The method which is used to invoke the callback_url URL. Defaults to POST.


## Plivo.stopCallRecording
Stop Recording a Call

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.


## Plivo.playMusicFile
Play a Music File

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.
| urls     | String     | A single URL or a list of comma separated URLs linking to an mp3 or wav file.
| length   | String     | Maximum length in seconds that the audio should be played.
| legs     | String     | The leg on which the music will be played, can be aleg (i.e., A-leg is the first leg of the call or current call), bleg (i.e., B-leg is the second leg of the call),or both (i.e., both legs of the call).
| loop     | String     | If set to true, the audio file will play indefinitely.
| mix      | String     | If set to true, sounds are mixed with current audio flow.


## Plivo.stopPlayingMusicFile
Stop Playing a Music File

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid


## Plivo.playText
The Speak API lets you play text asynchronously on a live call. These notifications can be useful when played during a live call, for example: ‘Please hold, while we transfer your call’ or ‘Your balance is running low…’, etc.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.
| text     | String     | Required: The text to be played.
| voice    | Select     | The voice to be used, can be MAN, WOMAN.
| language | String     | The language to be used, see Supported voices and languages below.
| legs     | String     | The leg on which the text has to be played, can be aleg (i.e., A-leg is the first leg of the call or current call), bleg (i.e., B-leg is the second leg of the call),or both (i.e., both legs of the call).
| loop     | String     | If set to true, the text will play indefinitely. 
| mix      | String     | If set to true, the text audio will be mixed in with current call audio. 


## Plivo.stopPlayingText
You can asynchronously stop the text which is being played by the Speak API.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.


## Plivo.sendDigits
Send digits on a call

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| callUuid | String     | Required: Valid callUuid.
| digits   | String     | Required: Digits to be sent.
| leg      | String     | The leg to be used, can be aleg (the current call) or bleg (the other party in a Dial). Defaults to aleg.


## Plivo.hangupCallRequest
Hangup a Call Request

| Field      | Type       | Description
|------------|------------|----------
| authToken  | credentials| Required: Valid authToken.
| authId     | credentials| Required: Valid authId.
| requestUuid| String     | Required: valid requestUuid.


## Plivo.getConferences
Retrieves a list of all conferences which are active on your account. This API returns the names of all the ongoing conferences.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.


## Plivo.getSingleConference
Retrieves the details of a particular conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.


## Plivo.hangupConferences
This API lets you hangup all ongoing conferences running on your account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.


## Plivo.hangupSingleConference
This API lets you hangup a particular conference by using the conference name.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.


## Plivo.startRecordingConference
This API lets you start recording a live conference.

| Field              | Type       | Description
|--------------------|------------|----------
| authToken          | credentials| Required: Valid authToken.
| authId             | credentials| Required: Valid authId.
| conferenceName     | String     | Required: Valid conferenceName.
| fileFormat         | String     | The file format of the record can be of mp3 or wav format. Defaults to mp3 format.
| transcriptionType  | String     | The type of transcription required. The following values are allowed: auto - This is the default value. Transcription is completely automated; turnaround time is about 5 minutes. hybrid - Transcription is a combination of automated and human verification processes; turnaround time is about 10-15 minutes.
| transcriptionUrl   | String     | The URL where the transcription is available.
| transcriptionMethod| String     | The method used to invoke the transcription_url. Defaults to POST.
| callbackUrl        | String     | The URL invoked by the API when the recording ends. The following parameters are sent to the callback_url: `api_id` - the same API ID returned by the conference record API. `recordUrl` - the URL to access the recorded file. `recordingId` - recording ID of the recorded file. `conferenceName` - the conference name recorded. `recordingDuration` - duration in seconds of the recording. `recordingDurationMs` - duration in milliseconds of the recording. `recordingStartMs` - when the recording started (epoch time UTC) in milliseconds. `recordingEndMs` - when the recording ended (epoch time UTC) in milliseconds.
| callbackMethod     | String     | The method which is used to invoke the callback_url URL. Defaults to POST.


## Plivo.stopRecordingConference
If the recording was initiated by the above Record API call, you could use this API call to stop recording the conference. This is useful when you don’t want to record certain parts of a conference which involves critical details being exchanged on the call.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.


## Plivo.hangupMember
This API lets you kick a member out of a conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.kickMember
This API lets you kick a member out of a conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.muteMember
This API lets you mute members in a conference. When a member is muted, audio from their device will be muted and other members in the conference will not be able to hear the caller.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.unmuteMember
This API lets you unmute members which have been muted by the Mute Member API.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.playSoundToMember
This API lets you play a mp3 or a wav file to a member in the conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.
| url           | String     | Required: URL of the sound file to be played.


## Plivo.stopPlayingSoundToMember
This API will stop the file which is being played to a member initiated by the Play API

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.playTextToMember
This API will play text to a member in a conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.
| text          | String     | Required: The text that the member must hear.
| voice         | Select     | The voice to be used. Can be MAN or WOMAN. Defaults to WOMAN.
| language      | String     | The language to be used, see Supported voices and languages below. Defaults to en-US.


## Plivo.stopPlayingTextToMember
This API will stop playing text to a member in a conference which was initiated by the Play Text API

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.makeMemberDeaf
This API lets you deaf a particular member. When this operation is made on a conference member, the member will not be able to hear any audio from the conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.enableHearingForMember
This API lets you un-deaf a member in a conference.

| Field         | Type       | Description
|---------------|------------|----------
| authToken     | credentials| Required: Valid authToken.
| authId        | credentials| Required: Valid authId.
| conferenceName| String     | Required: Valid conferenceName.
| memberId      | String     | Required: Valid memberId.


## Plivo.createEndpoint
This API lets you create a new endpoint on Plivo.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| username | String     | Required: The username for the endpoint to be created.
| password | String     | Required: The password for your endpoint username.
| alias    | String     | Required: Alias for this endpoint.
| appId    | String     | The app_id of the application that is to be attached to this endpoint.


## Plivo.getSingleEndpoint
This API lets you get details of a single endpoint on your account using the endpointId.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| endpointId| String     | Required: Valid endpointId.


## Plivo.getEndpoints
This API lets you get details of all endpoints. This is pretty useful in use-cases where you want statuses of your endpoints and whether they have been registered using a SIP client.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.


## Plivo.updateEndpoint
This API lets you modify an endpoint’s password, alias or the application attached to it.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| endpointId| credentials| Required: Valid endpointId.
| password  | String     | Required: The password for your endpoint username.
| alias     | String     | Required: Alias for this endpoint.
| appId     | String     | The app_id of the application that is to be attached to this endpoint.


## Plivo.deleteEndpoint
This API lets you delete an endpoint. This operation cannot be undone.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| endpointId| credentials| Required: Valid endpointId.


## Plivo.sendMessage
This API enables you to send messages via Plivo’s SMS service. The API supports Unicode UTF-8 encoded texts, so you can send messages in any language. The API also handles long SMS automatically by splitting it into standard SMS sized chunks and sending them. Delivery reports are automatically supported in networks where they are provided by the operator.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| src      | String     | Required: The phone number that will be shown as the sender ID. Be sure that all phone numbers include country code, area code, and phone number without spaces or dashes (e.g., 14153336666). Note that a Plivo phone number is required for sending messages to the U.S. or Canada. You can buya Plivo number from the Buy Numbers tab on your Plivo account dashboard.
| destination| String     | The number to which the message will be sent. Be sure that all phone numbers include country code, area code, and phone number withoutspaces or dashes (e.g., 14153336666). To send messages to multiple numbers, separate your destination phone numbers with the delimiter '<' (e.g., 14156667777<14157778888<14158889999).
| text     | String     | Required: The text message that will be sent. The API will encode the text in Unicode UTF-8 and accepts up to 1000 bytes of UTF-8 encoded text in a single API request. The text will be automatically split into multiple messages and sent separately if the message exceeds the size limit. See notes below for more details.
| type     | String     | The type of message. Should be `sms` for a text message. Defaults to `sms`.
| url      | String     | The URL to which with the status of the message is sent. 
The following parameters are sent to the URL: 
`To` - Phone number of the recipient 
`From` - Phone number of the sender 
`Status` - Status of the message including 'queued', 'sent', 'failed', 'delivered', 
'undelivered' or 'rejected' 
`MessageUUID` - The unique ID for the message 
`ParentMessageUUID` - ID of the parent message (see notes about long SMS below) 
`PartInfo` - Specifies the sequence of the message (useful for long messages split into 
multiple text messages; see notes about long SMS below) 
`TotalRate` - Total rate per sms 
`TotalAmount` - Total cost of sending the sms (TotalRate * Units) 
`Units` - Number of units into which a long SMS was split 
 `MCC` - Mobile Country Code (see here for more details) 
`MNC` - Mobile Network Code (see here for more details) 
`ErrorCode` - Delivery Response code returned by the carrier attempting the delivery.
 See Supported error codes below.
| method   | String     | The method used to call the url. Defaults nodeto POST.
| log      | String     | If set to false, the content of this message will not be logged on the Plivoinfrastructure and the dst value will be masked (e.g., 141XXXXX528). Default is set to true.


## Plivo.getMessages
Get Details of All Messages

| Field           | Type       | Description
|-----------------|------------|----------
| authToken       | credentials| Required: Valid authToken.
| authId          | credentials| Required: Valid authId.
| subaccount      | String     | The id of the subaccount, if message details of the subaccount is needed.
| messageDirection| String     | Filter the results by message direction. The valid inputs are inbound and outbound.
| messageTime     | String     | Filter out messages according to the time of completion. The filter can be used in the following five forms: messageState (optional),
| limit           | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset          | String     | Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.
| errorCode       | String     | Delivery Response code returned by the carrier attempting the delivery. See Supported error codes below.


## Plivo.getSingleMessage
Get Details of a Single Message

| Field      | Type       | Description
|------------|------------|----------
| authToken  | credentials| Required: Valid authToken.
| authId     | credentials| Required: Valid authId.
| messageUuid| String     | Required: Valid messageUuid.


## Plivo.getRentedNumbers
This API lets you list of numbers rented on Plivo and numbers added to your account.

| Field           | Type       | Description
|-----------------|------------|----------
| authToken       | credentials| Required: Valid authToken.
| authId          | credentials| Required: Valid authId.
| type            | String     | The type of number you are filtering. You can filter by local and tollfree numbers. Defaults to a local number.
| numberStartsWith| String     | Used to specify the beginning of the number. For example, if the number '24' is specified, the API will fetch only those numbers beginning with '24'.
| subaccount      | String     | Requires the auth_id of the subaccount as input. If this parameter is included in the request, all numbers of the particular subaccount are displayed.
| alias           | String     | This is a name given to the number. The API will fetch only those numbers with the alias specified.
| services        | String     | Filters out phone numbers according to the services you want from that number. The following values are valid: voice - Returns a list of numbers that provide 'voice' services. Additionally, if the numbers offer both 'voice' and 'sms', they are also listed. Note - This option does not exclusively list those services that provide both voice and sms . voice,sms - Returns a list of numbers that provide both 'voice' and 'sms' services. sms - Returns a list of numbers that provide only 'sms' services.
| limit           | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset          | String     | Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.


## Plivo.getRentedNumber
This API lets you get details of a single number on your Plivo account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| number   | String     | Required: number.


## Plivo.addOwnCarrierNumber
This API enables you to add a number of your own carrier.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| numbers   | String     | Required: A comma separated list of numbers that need to be added for the carrier. Make sure that you configure the numbers to point to the sip server @sbc.plivo.com. Eg: If the number you own from your carrier is 18554675486 then the sip address it needs to point to is 18554675486@sbc.plivo.com
| carrier   | String     | Required: The carrier_id of the IncomingCarrier that the number is associated with. For more information, check our IncomingCarrier API
| region    | String     | Required: This is the region that is associated with the Number. You can use it to organize numbers based on the area they are from.
| numberType| String     | This field does not impact the way Plivo uses this number. It is primarily adding more information about your number. You may use this field tocategorize between local and tollfree numbers. Default is local.
| appId     | String     | The application id of the application that is to be linked.
| subaccount| String     | The auth_id of the subaccount to which this number should be added. This can only be performed by a main account holder.


## Plivo.updateNumber
This API enables you to change the application and subaccount associated with a number you rented.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| number    | String     | Required: Valid number.
| appId     | String     | The application id of the application that is to be linked. If this is set to null, then any existing application is unlinked from the number.
| subaccount| String     | The auth_id of the subaccount to which this number should be added. This can only be performed by a main account holder.
| alias     | String     | The textual name given to the number.


## Plivo.unrentNumber
This API lets you unrent a number on Plivo. This operation cannot be undone.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| number   | String     | Required: Valid number.


## Plivo.searchNewNumbers
This API lets you search for fixed, mobile and tollfree numbers available on Plivo. Searches can be performed based on the country ISO, pattern, number type and region. We return a list of numbers which can then be bought.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| countryIso| String     | Required: The ISO code A2 of the country ( BE for Belgium, DE for Germany, GB for United Kingdom, US for United States etc ). See the Wikipedia site for a list of ISOs for different countries.
| type      | String     | The type of number you are looking for. The possible number types arefixed, mobile and tollfree. Defaults to any if this field is not specified. type also accepts the value any, which will search for all 3 number types.
| pattern   | String     | Represents the pattern of the number to be searched. Adding a pattern will search for numbers which start with the country code + pattern. For eg. a pattern of 415 and a country_iso: US will search for numbers starting with 1415.
| region    | String     | This filter is only applicable when the type is fixed. If the type is not provided, it is assumed to be fixed. Region based filtering can be performed with the following terms: Exact names of the region: You could use region=Frankfurt if you were looking for a number in Frankfurt. Performed if the search term is three or more characters in length.
| services  | String     | Filters out phone numbers according to the services you want from that number. The following values are valid: voice - If this option is selected, it ensures that the results have voice enabled numbers. These numbers may or may not be SMS enabled. voice,sms - If this option is selected, it ensures that the results have both voice and sms enabled on the same number. sms - If this option is selected, it ensures that the results have sms enabled numbers. These numbers may or may not be voice enabled. By default, numbers that have either voice or sms or both enabled are returned.
| lata      | String     | Numbers can be searched using Local Access and Transport Area. This filter is applicable only for country_iso US and CA.
| rateCenter| String     | Numbers can be searched using Rate Center. This filter is application only for country_iso US and CA.
| limit     | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset    | String     | Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.


## Plivo.buyNumber
The number retrieved from the search above should be used as an input to buy the number.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| number   | String     | Required: Valid number.
| appId    | String     | The ID of the application that you want assigned to the Number. If not specified, then it is assigned to the default application of the Account.


## Plivo.getPricing
The pricing API lets you retrieve a rates for a country for both inbound and outbound calls.

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| countryIso| String     | Required: The 2 digit country ISO code. eg. US, GB, QA.


## Plivo.getRecordings
List All Recordings

| Field     | Type       | Description
|-----------|------------|----------
| authToken | credentials| Required: Valid authToken.
| authId    | credentials| Required: Valid authId.
| addTime   | String     | Used to filter out recordings according to the time they were added
| subaccount| String     | Auth id of the subaccount. Lists only those recordings of the main accounts which are tied to the specified subaccount.
| callUuid  | String     | Used to filter recordings for a specific call.
| limit     | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset    | String     | Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.


## Plivo.getSingleRecording
The following API is used to retrieve a specific recording based on the recordingId.

| Field      | Type       | Description
|------------|------------|----------
| authToken  | credentials| Required: Valid authToken.
| authId     | credentials| Required: Valid authId.
| recordingId| String     | Required: Valid recordingId.


## Plivo.deleteRecording
This API lets you delete a recording from your Plivo account using the recording ID.

| Field      | Type       | Description
|------------|------------|----------
| authToken  | credentials| Required: Valid authToken.
| authId     | credentials| Required: Valid authId.
| recordingId| String     | Required: Valid recordingId.


## Plivo.listIncomingCarriers
This API will list all incoming carrier registered with you account on Plivo.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| name     | String     | Allows filtering by name. The filter term can be one of the following:The exact name of the Carrier Phrase contained within the name the carrier (includes the 'starts with' filter).
| limit    | String     | Used to display the number of results per page. The maximum number of results that can be fetched is 20.
| offset   | String     | Denotes the number of value items by which the results should be offset. Eg:- If the result contains a 1000 values and limit is set to 10 and offset is set to 705, then values 706 through 715 are displayed in the results. This parameter is also used for pagination of the results.


## Plivo.getSingleIncomingCarrier
This API returns the details of an incoming carrier.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| carrierId| String     | Required: Valid carrierId.


## Plivo.addIncomingCarrier
This API lets you add a new incoming carrier to your Plivo account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| name     | String     | Required: The name of the carrier being added. It is just a representation and the name can be chosen at will.
| ipSet    | String     | Required: Comma separated list of ip addresses from which calls belonging to the carrier will reach Plivo. This list will be used by Plivo to allow incoming call traffic into Plivo's servers. If calls come from an IP outside of this list, Plivo will not accept the call.


## Plivo.updateIncomingCarrier
This API lets you modify an existing incoming carrier set up on your account.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| carrierId| String     | Required: Valid carrierId.
| authId   | credentials| Required: Valid authId.
| name     | String     | The name of the carrier being added. It is just a representation and the name can be chosen at will.
| ipSet    | String     | Comma separated list of ip addresses from which calls belonging to the carrier will reach Plivo. This list will be used by Plivo to allow incoming call traffic into Plivo's servers. If calls come from an IP outside of this list, Plivo will not accept the call.


## Plivo.removeIncomingCarrier
This API lets you remove an incoming carrier added to your account. Please note that removing a carrier will result in all numbers associated with the carrier to be deleted.

| Field    | Type       | Description
|----------|------------|----------
| authToken| credentials| Required: Valid authToken.
| authId   | credentials| Required: Valid authId.
| carrierId| String     | Required: Valid carrierId.

