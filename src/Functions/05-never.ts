//Intersection conflict এ:

type A = { id: number };
type B = { id: string };
type C = A & B; // C.id এর type = never (কারণ একই value number AND string দুইটাই হতে পারে না)
// Function যেইটা কখনো return করে না:
function throwError(msg: string): never {
  throw new Error(msg); // কখনো normally return করে না
}
function infiniteLoop(): never {
  while (true) {} // কখনো শেষ হয় না
}

//Exhaustiveness check এ (Discriminated Union এর সাথে) — সবচেয়ে practical use:


// ---------- Base ----------
type BaseUser = { 
  id: string; 
  email: string; 
};

// ---------- Role-specific types ----------
type ClientUser = BaseUser & { 
  role: 'client'; 
  caseCount: number; 
};

type LawyerUser = BaseUser & { 
  role: 'lawyer'; 
  barNumber: string; 
};

type AdminUser = BaseUser & { 
  role: 'admin'; 
  permissions: string[]; 
};

type SuperAdminUser = BaseUser & { 
  role: 'superadmin'; 
  fullAccess: boolean; 
};

// ---------- Discriminated Union ----------
type VerdictUser = ClientUser | LawyerUser | AdminUser | SuperAdminUser;

// ---------- Exhaustiveness-checked function ----------
function getDashboardData(user: VerdictUser) {
  if (user.role === 'client') {
    return { caseCount: user.caseCount };
  } else if (user.role === 'lawyer') {
    return { barNumber: user.barNumber };
  } else if (user.role === 'admin') {
    return { permissions: user.permissions };
  } else if (user.role === 'superadmin') {
    return { fullAccess: user.fullAccess };
  } else {
    // সব ৪টা role branch এ handle হয়ে গেছে বলে, এইখানে user এর type = never
    const exhaustiveCheck: never = user;
    throw new Error(`Unhandled role: ${exhaustiveCheck}`);
  }
}

//৪. Assertion functions / guard clauses এ — যেইখানে function টা যদি condition fail করে, প্রোগ্রাম থামিয়ে দেয় (throw করে), সেই function এর return type never হয়, কারণ fail হলে normal execution আর continue হয় না।