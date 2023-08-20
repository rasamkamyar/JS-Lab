const student = {
  name: "rasam",
  family: "kamyar",
  age: 32,
  skills: "javascript",
  phoneNumber: "0912111111",
  isGraduated: true,
  getFullName: function () {
    return "dear " + this.name + " " + this.family;
  },
};
console.log(student.getFullName());
