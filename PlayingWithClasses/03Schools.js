class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (typeof value !== typeof 42) {
      console.log("Error ~ number of students must be a number.");
      return;
    }
    this._numberOfStudents = value;
  }

  quickfacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students of ${this._level} school age.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let teacherIndex = Math.floor(substituteTeachers.length * Math.random());
    console.log(substituteTeachers[teacherIndex]);
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "Primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Secondary extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "Secondary", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const schoolAlpha = new School("Oscar Occadamy", 11, "Free Reign");
console.log(schoolAlpha);
schoolAlpha.quickfacts();
School.pickSubstituteTeacher(["Larry", "Betty", "Donald"]);

console.log("---");

const primary = new Primary("Tiny tots", 40, "Both arms only");
console.log(primary);

const secondary = new Secondary("Lorem Academy", 300, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(secondary);
