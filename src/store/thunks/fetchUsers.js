import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  await pause(1000);

  return response.data;
});

// DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// rtk automatically creates three properties assigned to the fetchUsers
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled
// fetchUsers.rejected

export { fetchUsers };
