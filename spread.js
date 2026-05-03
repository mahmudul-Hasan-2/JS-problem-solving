const devProfile = {
  name: "Nirab",
  email: "nirab@example.com",
  isAvailable: false,
  stack: "MERN",
};

const updateProfile = {
  ...devProfile,
  isAvailable: true,
  hobby: "Coding",
};

const { name, email, ...others } = updateProfile;

console.log(updateProfile);
console.log(others);
