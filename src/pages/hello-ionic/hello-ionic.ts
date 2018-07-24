import { Component } from "@angular/core";
import { AlertController } from "ionic-angular";
@Component({
  selector: "page-hello-ionic",
  templateUrl: "hello-ionic.html"
})
export class HelloIonicPage {
  constructor(private alertCtrl: AlertController) {}

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: "Is this unit free from defects",
      message: "",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
            // window["plugins"].intentShim.startActivity(
            //   params,
            //   successCallback,
            //   failureCallback
            // );
          }
        },
        {
          text: "Yes",

          handler: () => {
            window["plugins"].intentShim.sendBroadcast(
              {
                action: "com.reach.ACTION",
                extras: {
                  "random.number": Math.floor(Math.random() * 1000 + 1)
                }
              },
              function() {
                console.log("yes");
              },
              function() {
                console.log("Failed to send Android broadcast intent");
              }
            );
          }
        }
      ],
      cssClass: "alertDanger"
    });
    alert.present();
  }
}
