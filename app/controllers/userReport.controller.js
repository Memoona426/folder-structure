const UserReport = require("../models/userReport.model");

const createReport = async (req, res) => {
  const { user, date, task, status, description } = req.body;
  const { id } = req

  try {
    const existingReport = await UserReport.findOne({ user, date });

    if (existingReport) {
      return res.status(400).json({
        status: false,
        message: "Report already submitted for this date"
      });
    }

    const newReport = await UserReport.create({
      userId: id,
      date,
      task,
      status,
      description
    });

    return res.status(201).json({
      status: true,
      message: "Report created successfully",
      report: newReport,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

const checkUserActivitiesByAdmin = async (req, res) => {
  const { role } = req

  try {
    if (role !== "admin") {
      loggerResponse({
        type: "error",
        message: `only admin can toggle status of user`,
        res: ""
      })
      return res
        .status(400)
        .json({ status: false, message: "only admin can toggle status of user" });
    }

    const reports = await UserReport.find()

    return res.status(201).json({
      status: true,
      message: "Report created successfully",
      reports
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "Internal server error"
    });
  }
};

module.exports = {
  createReport,
  checkUserActivitiesByAdmin
}
