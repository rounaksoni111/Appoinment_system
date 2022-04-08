const mysqlQueryExecuter = require('../lib/mysqlQueryExecuter');

var User = function (params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.locVal = params.locVal;
  this.roleVal = params.roleVal;
  this.username = params.username;
  this.email = params.email;
  this.password = params.password;
  this.AdminEmail = params.AdminEmail;
  this.ad_Password = params.ad_Password;
  this.firstname = params.firstname;
  this.lastname = params.lastname;
  this.status = params.status;
  this.is_active = params.is_active;
  this.role_id = params.role_id;
  this.createdby = params.createdby;
  this.updatedby = params.updatedby;
  this.userid = params.userid;
  this.phone = params.phone;
  this.franchise_id = params.franchise_id;
  this.apoin_with = params.apoin_with;
  this.date = params.date;
  this.time = params.time;
  this.reference = params.reference;
  this.name = params.name;
  this.contact = params.contact;
  this.minDate= params.minDate,
  this.maxDate = params.maxDate,
  this.time_period = params.time_period,
  this.is_available = params.is_available,
  this.is_active = params.is_active,
  this.reEnterPassword = params.reEnterPassword
};


User.prototype.getfranchise = async function () {
  const that = this;
  const Query = `SELECT * FROM franchise WHERE status=1;`;
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};


User.prototype.getRoleforAppoin = async function () {
  const that = this;
  const Query = `SELECT * FROM role WHERE id NOT IN (1,2,4);`;
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.getRole = async function () {
  const that = this;
  const Query = `SELECT * FROM role WHERE id NOT IN (1,2);`;
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.showDoctorList = async function () {
  const that = this;

  // const Query = 'SELECT * From users WHERE role_id = ? AND location_id = ?';
  const Query = 'SELECT users.id, users.username, user_profile.phone, users.email FROM users LEFT JOIN user_profile ON users.id = user_profile.user_id WHERE users.role_id = '+that.roleVal+' AND users.franchise_id = '+that.locVal+'';
  const Values = [that.roleVal, that.locVal];
  // console.log(Query);
  // console.log(Values);
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.login = async function () {
  const that = this;

  const Query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const Values = [that.email, that.password];
  
  // console.log(Query);
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
};


User.prototype.Ad_login = async function () {
  const that = this;
  const Query = 'SELECT * FROM admin WHERE email = '+that.AdminEmail+' AND password = '+that.ad_Password+';';
  const Values = [that.AdminEmail, that.ad_Password];
  // console.log(Query);
  // console.log(Values);
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.getUser = async function () {
  const that = this;
  const Query = `SELECT u.id, u.username, u.email, u.password, r.role_name, f.franchise_name FROM users AS u LEFT JOIN franchise AS f ON u.franchise_id = f.id LEFT JOIN role AS r ON u.role_id = r.id;`;
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.registeruser = async function () {
  const that = this;

  const Query = `INSERT INTO users (username, role_id, email, password, franchise_id, status, is_active, created_by, updated_by) VALUES (?,?,?,?,?,1,1,2,NULL);`;
  const Values = [that.username, that.role_id, that.email, that.password, that.franchise_id, ];
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
};


User.prototype.registeruserprof = async function () {
  const that = this;

  const Query = `INSERT INTO user_profile (user_id, first_name, last_name, phone, status, is_active, created_by, updated_by) VALUES (?,?,?,?,1,1,2,NULL);`;
  const Values = [that.userid, that.firstname, that.lastname, that.phone];
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
};


User.prototype.getUserprf = async function () {
  const that = this;
  const Query = `SELECT * FROM user_profile`;
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.getUserById = async function () {
  const that = this;
  const Query = `SELECT user_profile.user_id, user_profile.first_name, user_profile.last_name, users.franchise_id ,role.role_name FROM user_profile LEFT JOIN users ON users.id = user_profile.user_id LEFT JOIN role ON users.role_id = role.id WHERE user_profile.user_id = ?`;
  const Values = [that.user_id];

  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


// User.prototype.schedule = async function () {
//   const that = this;

//   const Query = `INSERT INTO appoinment_record (name, appoinment_with, date, time, reference) VALUES (?,?,?,?,?);`;
//   const Values = [that.username, that.apoin_with, that.date, that.time, that.reference];
//   // console.log(Query)
//   const { result } = await mysqlQueryExecuter({ Query, Values });
//   return result;
// }


User.prototype.getUserDataByID = async function () {
  const that = this;
  // const Query = `SELECT appointed_client.id, appointed_client.name, appointed_client.contact, appointed_client.reference, appoinment_record.date, appoinment_record.time, franchise.franchise_name, users.username FROM appointed_client LEFT JOIN appoinment_record ON appointed_client.id = appoinment_record.id LEFT JOIN users ON users.id= appointed_client.user_id LEFT JOIN franchise ON franchise.id = appointed_client.franchise_id WHERE users.id = ?`;
  const Query = `SELECT appointed_client.id, appointed_client.name, appointed_client.contact, appointed_client.reference, appoinment_record.date, appoinment_record.time_period,  appoinment_record.date + INTERVAL 1 day as Date, DATE_Format(appoinment_record.date + INTERVAL 12 HOUR,'%d/%m/%Y') as DATE, appoinment_record.time, franchise.franchise_name, users.username FROM appointed_client LEFT JOIN appoinment_record ON appointed_client.id = appoinment_record.id LEFT JOIN users ON users.id= appointed_client.user_id LEFT JOIN franchise ON franchise.id = appointed_client.franchise_id WHERE  appoinment_record.user_id = ? AND appoinment_record.date BETWEEN ? AND ?;`
  const Values = [that.user_id, that.minDate, that.maxDate];

  // console.log(Query)
  // console.log("getUserDataByID",Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}

User.prototype.filterData = async function () {
  const that = this;
  // const Query = `SELECT appointed_client.id, appointed_client.name, appointed_client.contact, appointed_client.reference, appoinment_record.date, appoinment_record.time, franchise.franchise_name, DATE_Format(appoinment_record.date + INTERVAL 12 HOUR,'%d/%m/%Y') as DATE,users.username FROM appointed_client LEFT JOIN appoinment_record ON appointed_client.id = appoinment_record.id LEFT JOIN users ON users.id= appointed_client.user_id LEFT JOIN franchise ON franchise.id = appointed_client.franchise_id WHERE users.id = ? AND appoinment_record.date BETWEEN ? AND ?`;
  const Query = `SELECT appointed_client.id, appointed_client.name, appointed_client.contact, appointed_client.reference, appoinment_record.date, DATE_Format(appoinment_record.date + INTERVAL 12 HOUR,'%d/%m/%Y') as DATE ,appoinment_record.time, appoinment_record.time_period, franchise.franchise_name, users.username FROM appointed_client LEFT JOIN appoinment_record ON appointed_client.id = appoinment_record.id LEFT JOIN users ON users.id= appointed_client.user_id LEFT JOIN franchise ON franchise.id = appointed_client.franchise_id WHERE  appoinment_record.user_id = ? AND appoinment_record.date BETWEEN ? AND ?;`
  const Values = [that.id, that.minDate, that.maxDate];
  // console.log(Query)
  console.log("filterData",Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}



User.prototype.appoinment_record = async function () {
  const that = this;

  const Query = `INSERT INTO appoinment_record (franchise_id, user_id, date, time_period, time) VALUES (?,?,?,?,?);`;
  const Values = [that.franchise_id, that.user_id, that.date, that.time_period, that.time];
  // console.log(Query);
  // console.log("record",Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


User.prototype.appointed_client = async function () {
  const that = this;

  const Query = `INSERT INTO appointed_client (franchise_id, user_id, name, contact, reference) VALUES (?,?,?,?,?);`;
  const Values = [that.franchise_id, that.user_id, that.name, that.contact, that.reference];
  // console.log(Query);
  // console.log("client",Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}

User.prototype.getOldAppoinment = async function () {
  const that = this;
  const Query = `SELECT DATE_Format(date + INTERVAL 15 HOUR,'%d/%m/%Y') as date, time, time_period FROM appoinment_record WHERE user_id = ? && date = ?`;
  const Values = [that.user_id, that.date];

  // console.log(Query, Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


User.prototype.getMaxUserID = async function () {
  const that = this;
  const Query = `SELECT max(user_id) AS maxid FROM user_profile`;
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query });
  return result;
};

User.prototype.AdminLogin = async function () {
  const that = this;

  const Query = `SELECT u.id, u.username, u.email, u.role_id, u.franchise_id, u.status, u.is_active, u.created_by, u.created_at FROM users AS u WHERE u.email=? AND u.password=?`;
  const Values = [that.email, that.password];
  
  // console.log(Query);
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return { user: result[0] };
};



User.prototype.setAvailablity = async function () {
  const that = this;

  const Query = `INSERT INTO appointment_manage (id, user_id, date, time_period, time, is_available, is_active) VALUES (?,?,?,?,?,?,?)
  ON DUPLICATE KEY 
  UPDATE is_available = ?, updated_at = now();`;
  const Values = [that.id, that.user_id, that.date, that.time_period, that.time, that.is_available, 1, that.is_available];
  // console.log(Query);
  // console.log("value",Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


User.prototype.getUserLeave = async function () {
  const that = this;
  // const Query = `SELECT appointment_manage.id, appointment_manage.date FROM appointment_manage LEFT JOIN users ON appointment_manage.user_id = users.id WHERE appointment_manage.user_id = ?`;
  // const Query = `SELECT id, date FROM appointment_manage WHERE user_id = ?`;
  const Query = `SELECT id, DATE_FORMAT(date, '%Y-%m-%d') as date, time_period, time, is_available, is_active FROM appointment_manage WHERE user_id = ? && is_available = 0`;
  const Values = [that.id];

  // console.log(Query, Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


User.prototype.getDoctorLeave = async function () {
  const that = this;
  // const Query = `SELECT appointment_manage.id, appointment_manage.date FROM appointment_manage LEFT JOIN users ON appointment_manage.user_id = users.id WHERE appointment_manage.user_id = ?`;
  // const Query = `SELECT id, date FROM appointment_manage WHERE user_id = ?`;
  const Query = `SELECT id, DATE_FORMAT(date, '%Y-%m-%d') as date , time_period, time, is_available, is_active FROM appointment_manage WHERE user_id = ? && date = ? && is_available = '0'`;
  const Values = [that.id, that.date];

  // console.log(Query, Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}

User.prototype.getUserPassord = async function () {
  const that = this;
  const Query = `SELECT password FROM users WHERE id = ?`;
  const Values = [that.id];

  // console.log(Query, Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


User.prototype.updateNewPassword = async function () {
  const that = this;
  const Query = `UPDATE users SET password = ?, updated_by = `+that.id+` WHERE id = ? `;
  const Values = [that.reEnterPassword, that.id];

  // console.log(Query)
  // console.log(Query, Values)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
}


module.exports = User;


