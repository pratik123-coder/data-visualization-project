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