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

/*
 * Interface = contract, only declares what must exist (no logic, no body)
*implements = a class's promise to fulfill that contract
*Missing property/method after implements → compile-time error
*Interface property = type only; class property = actual value assigned
*Interface method = signature only; class method = real logic with body
*this.propertyName used inside a class to access its own data
*Main benefit: polymorphism — one function works with any class implementing the same interface, no if/else needed
*Practiced with: PaymentProvider/BkashProvider, NotificationSender/EmailSender/SmsSender, Bouquet/RoseBouquet
 */