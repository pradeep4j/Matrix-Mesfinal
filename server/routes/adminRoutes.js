import express from "express";
import { isAdmin,protectRoute } from '../middlewares/authMiddleware.js';
import axios from 'axios'; //here axios only used to validate reCaptcha
import {login,logout,auditoreGet,catCreate,catGettting,catEditById,deleteCat,stateGetting,gettingUser,notificationCreate,createUser,editUser,deleteUser,gettingCompany,gettingBranch,gettingCompliances,gettingCompliancesAll,createBranch,createCompany,createCompliances,gettingNotification,gettingCompliancesById,gettingCompliancesOnCreate,updateCompliancesById,complianceApporve,gettingCompliancesReject,complianceReject,complianceFilter,complianceRejectedFilter,gettingCompliancesAllFilter,checkListCreate,checkListFind,updateChecklistsById,checklistOnCreateegetting,gettingchecklistById,checklistAllgetting,checklistApporve,checkListAllFilter,checkListCreateFilter,checklistApprovegetting,checkListApproveFilter,checklistOnRejectegetting,rejectChecklist,checkListRejectedFilter,gettingchecklistAllCompliance,complianceApproveFilter,gettingAuditDetail,createLiseReg} from '../controllers/Admin.js';
import { upload } from "../middlewares/multerConfig.js";
const router = express.Router();
router.post('/login',login); 
router.get('/logout',logout);
/*auditor start*/
router.get('/auditoreGet',protectRoute,auditoreGet);
/*auditor end*/
/*category start*/
router.post('/catCreate',protectRoute,catCreate);
router.get('/catGettting',protectRoute,catGettting);
router.put('/catEditById/:id',protectRoute,catEditById);
router.delete('/deleteCat/:id',protectRoute,deleteCat);
/*category ends*/
router.get('/stateGetting',protectRoute,stateGetting);
router.post('/notificationCreate', upload.single("document"),protectRoute,notificationCreate);
router.get('/gettingNotification',protectRoute, gettingNotification);
router.get('/comapany/:comany/:state/:date',protectRoute,notificationCreate);
/*users start*/
router.post('/userCreate',protectRoute, createUser )
router.get('/gettingUser',protectRoute,gettingUser);
router.put('/editUser/:id',protectRoute,editUser);
router.delete('/deleteUser/:id',protectRoute,deleteUser);
/*users ends*/
/*company start*/
router.post('/createCompany',protectRoute, createCompany);
router.get('/gettingCompany',protectRoute, gettingCompany);
/*company end*/
/*branch start*/
router.get('/gettingBranch',protectRoute, gettingBranch);
router.post('/createBranch',protectRoute, createBranch);
/*branh ends*/
/*compliance start*/
router.post('/createCompliances',upload.fields([{ name: 'image' }, { name: 'document' }]),protectRoute, createCompliances);
router.get('/gettingCompliances',protectRoute, gettingCompliances);
router.get('/gettingCompliancesAll',protectRoute, gettingCompliancesAll);
router.get('/gettingCompliancesOnCreate',protectRoute, gettingCompliancesOnCreate);
router.get('/gettingCompliancesById/:id',protectRoute,gettingCompliancesById);
router.put('/updateCompliancesById/:id',upload.fields([{ name: 'image' }, { name: 'document' }]),protectRoute,updateCompliancesById);
router.patch('/complianceApporve',protectRoute,complianceApporve);
router.patch('/complianceReject',protectRoute,complianceReject);
router.post('/complianceApproveFilter', protectRoute,complianceApproveFilter );
router.post('/gettingCompliancesFilter', protectRoute,complianceFilter );
router.post('/gettingCompliancesAllFilter', protectRoute,gettingCompliancesAllFilter);
router.post('/gettingCompliancesRejetFilter', protectRoute,complianceRejectedFilter);
router.get('/gettingCompliancesReject',protectRoute, gettingCompliancesReject);
/*compliance ends*/
/*checklist start*/
router.post('/checkListCreate', upload.fields([{ name: 'image' }, { name: 'document' }]) ,protectRoute, checkListCreate)
router.get('/checkListGetting',protectRoute, checkListFind);
router.put('/updateChecklistsById/:id',upload.fields([{ name: 'image' }, { name: 'document' }]),protectRoute,updateChecklistsById);
router.get('/checklistOnCreateegetting',protectRoute, checklistOnCreateegetting);
router.get('/gettingchecklistById/:id',protectRoute,gettingchecklistById);
router.get('/checklistAllgetting',protectRoute, checklistAllgetting);
router.get('/checklistApprovegetting',protectRoute, checklistApprovegetting)
router.patch('/checklistApporve',protectRoute,checklistApporve);
router.post('/checkListAllFilter',protectRoute, checkListAllFilter)
router.post('/checkListApproveFilter',protectRoute, checkListApproveFilter)
router.post('/checkListCreateFilter',protectRoute, checkListCreateFilter)
router.get('/checklistOnRejectegetting',protectRoute, checklistOnRejectegetting) 
router.patch('/rejectChecklist',protectRoute, rejectChecklist)
router.post('/checkListRejectedFilter',protectRoute, checkListRejectedFilter)
/*checklist ends*/
/* getting compliance for checklist select start*/
router.get('/gettingchecklistAllCompliance',protectRoute, gettingchecklistAllCompliance)
/*audit start*/
router.get('/gettingAuditDetail',protectRoute, gettingAuditDetail)
/*audit ends*/
/* getting compliance for checklist select ends*/
/*liseReg start*/
router.post('/createLiseReg', upload.fields([{ name: 'licenseUpload' }, { name: 'challanUpload' }, { name: 'acknowledge' }, { name: 'documents' }]), createLiseReg)
/*liseReg end*/

/*checking which routes are called start*/
router.use((req, res, next) => {
    console.log(`In router: ${req.method}:${req.originalUrl}`);
    next();
});
/*checking which routes are called ends*/
export default router;
