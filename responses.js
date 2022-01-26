// *********** Create remarks model
// Remarks

// moduleType : enums 
// userId : 
// moduleid : mrfId / candidateId
// body : 

exports.companyDetails = [
  {
    _id: 0123,
    name: "Tata Motors",
    locations: [
      {
        name: "mumbai",
        id: 123,
      },
      {
        name: "pune",
        id: 124,
      },
    ],
  },
  {
    _id: 0124,
    name: "Tata Steels",
    locations: [
      {
        name: "mumbai",
        id: 121,
      },
      {
        name: "pune",
        id: 120,
      },
    ],
  },
];

exports.departmentDetails = [
  {
    _id: 1001,
    companyID: 0123,
    name: "Research and Development",
    headId: 81230,
    parentId: null,
    designationName : "manager"
  },
  {
    _id: 1002,
    companyID: 0123,
    name: "Software Development",
    headId: 81231,
    parentId: 1001,
    designationName : "manager"
},

  {
    _id: 1003,
    companyID: 0123,
    name: "Machine Learning",
    headId: 81241,
    parentId: 1001,
    designationName : "manager"
  },
  {
    _id: 1004,
    companyID: 0123,
    name: "Operations",
    headId: 81240,
    parentId: null,
    designationName : "manager"
  },
  {
    _id: 1005,
    companyID: 0123,
    name: "Sales",
    headId: "81251",
    parentId: 1004,
    designationName : "manager"
  },
];

exports.approvalMatrix = {
  _id: "2123",
  postionName: "SDE-1",
  postionRequesterID: 81231,
  companyID: 0123,
  departmentID: 1001,
  subDepartmentID: 1002,
  approverList: ["81234", "81244"],
};

exports.mrfRequest = [
  {
    _id: "mrf_123",
    positonID: "2123",
    noOfReq: 3,
    designation: "Senior Developer",
    rmName: "Rishabh",
    rmDesignation: "CTO",
    departmentID: 1001,
    subDepartmentID: 1002,
    location: "WFH",
    budget: 500000,
    positonType: "Full time",
    specification: {
      age: 24,
      relExp: 4,
      totalExp: 5,
      education: "B Tech",
    },
    mrfStatus: "OPEN",
    diversity: "General",
    startDate: 24 / 01 - 2022,
    endDate: 30 / 01 / 2022,
  },
];

exports.users = [
  {
    _id: 81231,
    companyID: 0123,
    departmentID: 1001,
    subDepartmentID: 1002,
    designation: "manager",
    name: "Vishal sub dep head",
    email: "vishal@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "female",
    diversity: "physically challenge",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
  {
    _id: 81230,
    companyID: 0123,
    departmentID: 1001,
    subDepartmentID: 1002,
    designation: "sales head",
    name: "Rish Department Head",
    email: "rish@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "male",
    diversity: "xyz",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
  {
    _id: 81232,
    companyID: 0123,
    departmentID: 1001,
    subDepartmentID: 1002,
    designation: "Techinical Architect",
    name: "Sankalp Approver",
    email: "sankalp@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "male",
    diversity: "xyz",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
  {
    _id: 81242,
    companyID: 0123,
    departmentID: 1001,
    subDepartmentID: 1002,
    designation: "Techinical Architect",
    name: "Abdul Approver",
    email: "abdul@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "male",
    diversity: "xyz",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
  {
    _id: 81233,
    companyID: 0123,
    departmentID: 1004,
    subDepartmentID: 1005,
    designation: "Business Analyst",
    name: "Shamshad - Interviwer",
    email: "sankalp@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "male",
    diversity: "xyz",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
  {
    _id: 81234,
    companyID: 0123,
    departmentID: 1004,
    subDepartmentID: 1005,
    designation: "Business Analyst",
    name: "Dips - Recruiter 1",
    email: "dips@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "male",
    diversity: "xyz",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
  {
    _id: 81244,
    companyID: 0123,
    departmentID: 1004,
    subDepartmentID: 1005,
    designation: "Business Analyst",
    name: "Sanya - Recruiter 2",
    email: "sanya@gmail.com",
    password: "test@123",
    location: "mumbai",
    userType: 123,
    jobType: "full-time",
    gender: "male",
    diversity: "xyz",
    isActive: true,
    isSuperAdmin: false,
    permissions: [
      {
        createuser: true,
      },
    ],
  },
];


