//Union Type

type UserRole = "client" | "lawyer" | "admin";

function getDashboard(role: UserRole) {
  if (role === "admin") return "Admin Panel";
  if (role === "lawyer") return "Case Management";
  return "Client Portal";
}

getDashboard("judge");   // ❌ TS error dibe! "judge" UserRole na
/**
 * *a value can be one of several listed types, nothing outside that list.
 */


//Intersection Type
interface Person {
  name: string;
}
interface Employee {
  employeeId: number;
}
type Staff = Person & Employee;

//Literal Types
type CaseStatus = "pending" | "in-review" | "approved" | "rejected";

function updateCaseStatus(status: CaseStatus) {
  console.log(`Case is now: ${status}`);
}

updateCaseStatus("approved");   // ✅
updateCaseStatus("completed");  // ❌ TS ekhane e dhore felbe — typo/wrong status

/**
 * *a value must satisfy all the combined types at once, so it has every property from each.
 */
//Mapped Types
interface User {
  name: string;
  age: number;
}
type UserKeys = keyof User; // "name" | "age" (eta ekta Union Literal Type!)
type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};

/**
 * *you loop over an existing type's keys to generate a new type with transformed properties (like adding readonly or ?)
 */
  //All in One

interface CaseData {
  clientName: string;
  lawyerId: string;
  amount: number;
}

type ReadOnlyCaseData = {
  readonly [K in keyof CaseData]: CaseData[K];
};

function displayCase(caseInfo: ReadOnlyCaseData) {
  console.log(caseInfo.clientName);
  caseInfo.amount = 5000; // ❌ TS error — accidental mutation prevent hoye gelo
}