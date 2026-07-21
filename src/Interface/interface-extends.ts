 // Approch
 interface BaseUser {
  id: string;
  name: string;
  email: string;
}

interface Customer extends BaseUser {
  loyaltyPoints: number;
}

interface Admin extends BaseUser {
  permissions: string[];
}

interface BAseUser{
    id:string ;
    name: string;
    email: string;
}

interface BaseUser {
  id: string;
  name: string;
  email: string;
}

interface Client extends BaseUser {
  address: string;
  stripeCustomerId: string;
}

interface Lawyer extends BaseUser {
  barNumber: string;
  education: string;
  isAvailable: boolean;
}

interface Admin extends BaseUser {
  permissions: string[];
}

/*
 * Instead of repeating common fields in every interface, you write them once in a BaseUser interface. Then, when a new interface extends it, it automatically gets all the base fields plus its own new fields — so you don't have to write the same fields again and again.
 */