import mongoose from 'mongoose';

const auditSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    },
    branch: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    image: {
        type: Object
    },
    imagetype :{
        type: Object
    },
    state: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    executive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    auditor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    overdue: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        index: true
    },
    risk: {
        type: String,
        index: true
    },
    score: {
        type: Number,
        index: true
    },
    start_date: {
        type: Date,
        default: null
    },
    end_date: {
        type: Date,
        default: null
    },


}, { timestamps: true })

const Audit = mongoose.model('Audit', auditSchema)
export default Audit;