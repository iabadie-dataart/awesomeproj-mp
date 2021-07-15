Repo created to test MP styling issue on iOS 

Steps to reproduce:
- Create your `.env` file on root and Setup your `MP_PUBLIC_KEY` and `MP_ACCESS_TOKEN` there.
- Run `yarn` or `npm install` on the project root.
- run `gem install cocoapods-user-defined-build-types`
- run `pod install` on iOS folder.
- Run project on iOS simulator.


On the app, to enter the flow, press "Pagar MP". App will get the preferenceId and will open the MP Flow. After complete a payment with a test credit cart, you can press continue or close with the cross. On anyway app header will be overlaped or some weird style will appear on the app.

Problem not appear if user enter on MP Flown but then go back withou pay. Seems like is after payment creation.
