"use strict";
//Union Type
Object.defineProperty(exports, "__esModule", { value: true });
function getDashboard(role) {
    if (role === "admin")
        return "Admin Panel";
    if (role === "lawyer")
        return "Case Management";
    return "Client Portal";
}
getDashboard("judge"); // ❌ TS error dibe! "judge" UserRole na
function updateCaseStatus(status) {
    console.log(`Case is now: ${status}`);
}
updateCaseStatus("approved"); // ✅
updateCaseStatus("completed"); // ❌ TS ekhane e dhore felbe — typo/wrong status
function displayCase(caseInfo) {
    console.log(caseInfo.clientName);
    caseInfo.amount = 5000; // ❌ TS error — accidental mutation prevent hoye gelo
}
//# sourceMappingURL=03-advance-types.js.map