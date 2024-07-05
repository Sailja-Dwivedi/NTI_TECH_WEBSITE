const express = require("express");
const Contactdata = express.Router();
const Contact = require("../modal/contact_modal");

Contactdata.get("/Contactlist", async (req, res) => {
    try {
        const data = await Contact.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Contactdata.delete("/Contactlist/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Contact.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Contactdata.put("/Contactlist/:id", async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const result = await Contact.findByIdAndUpdate(id, updateData, { new: true });
        if (!result) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.json({ message: "Contact updated successfully", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = { Contactdata };
