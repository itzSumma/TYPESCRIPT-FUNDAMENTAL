//Structure
//class ClassName implements InterfaceName { ... }
class ClassName implements InterfaceName {
  methodName(paramName: paramType): returnType {
    // main logic here
  }
}
//Practice-1
interface PaymentProvider{
    processPayment(amount:number):boolean;
}
class BkashProvider implements PaymentProvider{
    processPayment(amount:number):boolean{
        console.log("Bkash Payment done");
        return true;
            }
}

//Practice-2
interface NotificationSender{
    sendNotification(message:string): boolean;

}

class EmailSender implements NotificationSender{
    sendNotification(message:string):boolean{
        console.log("Email sent :" + message)
        return true;
        
    }
}

class SmsSender implements NotificationSender{
    sendNotification(message:string):boolean{
        console.log("SMS sent :" + message)
        return true;
        
    }
}

function notifyCustomer (sender:NotificationSender, message:string){
    sender.sendNotification(message);
}

notifyCustomer(new EmailSender(), "Your order has been placed");
notifyCustomer(new SmsSender(), "Your order has shipped");

//Practice-1
interface Bouquet {
    flowerName:string;
    price:number;
  getSummary():string;
    
  }

  class RoseBouquet implements Bouquet{
    flowerName:string="Rose";
    price:number=500;
   getSummary():string{
   return `Rose Bouquet : ${this.flowerName} Price : ${this.price}`
   }
  }

/**
 * 🔲 Remaining (ordered by importance):

Generic Interface — making interfaces reusable/flexible with generics (last piece of Interface topic)
Interface vs Type — when to use which, key differences
Utility types (Partial, Pick, Omit, Record) — most practical, used daily
Type narrowing + type guards — needed for API error handling, validation
Access modifiers (public/private/protected) + abstract class
Enum vs literal union — when to use which
any vs unknown vs never — safety-related subtle differences
Module system + namespaces (deeper, lower priority for your stack)
 */