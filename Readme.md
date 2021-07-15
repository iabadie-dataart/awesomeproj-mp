Repo created to test MP styling issue on iOS 14.4

### Steps to reproduce:
- Create your `.env` file on root and Setup your `MP_PUBLIC_KEY` and `MP_ACCESS_TOKEN` there.
- Run `yarn` or `npm install` on the project root.
- run `gem install cocoapods-user-defined-build-types`
- run `pod install` on iOS folder.
- Run project on iOS simulator.


### Explanation
On the app, to enter the flow, press "Pagar MP". App will get the preferenceId and will open the MP Flow. After complete a payment with a test credit cart, you can press continue or close with the cross. On anyway app header will be overlaped or some weird style will appear on the app.

Problem not appear if user enter on MP Flown but then go back withou pay. Seems like is after payment creation.

### Tested devices
iPhone 12 - 14.4 (Notch) -> Wrong styling behavior
iPhone 8 Plus - 14.4 (Without Notch) -> Wrong styling behavior 
iPhone 8 Plus - 13.6 (Without Notch) -> Correct styling behavior 

### Gif of the example

![](https://github.com/iabadie-dataart/awesomeproj-mp/blob/master/ios.gif)
