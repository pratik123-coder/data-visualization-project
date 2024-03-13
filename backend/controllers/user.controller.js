import { User } from "../models/user.model.js";

export const getSalaryDataForChart = async (req, res) => {
    try {
        const users = await User.find().select("_id salary");

        const salaryData = users.map((user) => ({
            id: user._id, 
            salary: user.salary || 0,
        }));

        res.status(200).json(salaryData);
    } catch (error) {
        console.error("Error in getSalaryDataForChart: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllUsersData = async (req, res) => {
    try {
      
      const users = await User.find({}, 'fullName salary');
  
      if (!users || users.length === 0) {
        return res.status(404).json({ message: 'No users found' });
      }
  
      
      const userData = users.map((user) => ({
        fullName: user.fullName,
        salary: user.salary,
      }));
  
      // Send the response
      res.status(200).json({
        users: userData,
        message: 'All users data retrieved successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };