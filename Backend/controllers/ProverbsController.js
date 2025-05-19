import { readFileSync, writeFileSync } from "fs";
import {v4 as uuidv4} from "uuid"

//  path to the data(proverbs.json) file
const filePath = "./proverbs.json";

// Read from file
const readData = () => JSON.parse(readFileSync(filePath));

// Write to file
const writeData = (data) => writeFileSync(filePath, JSON.stringify(data));

// GET all proverbs
export const getAll = async (req, res) => {
  const data = await readData();
  if(data){
    res.status(200).json(data) 
  }
  else{
    res.status(404).json({message: "Data Not Found!"})
  }
};

// GET one proverb by ID
export const getById = async (req, res) => {
  const data = await readData();

   //Get id from request body
   const { id } = req.params;
  const proverb = data.find(p => p.id == id);
  if (!proverb) {
    res.status(404).json({message: "Proverb not found"});
  } else {
    res.json(proverb);
  }
};


export const create = async (req, res) => {
  const data = await readData();
  const body =  req.body;


  if (body) {
  const newProverb = {
        id: uuidv4(), // generates a unique ID
    ...req.body,
  };

  data.push(newProverb);
  writeData(data);

 res.status(201).json({ message: "Proverb created successfully!", data: newProverb });
  }

  else{
    res.status(404). json({message:"proverb is not created!"})
  }
};


// UPDATE a proverb
export const update = async (req, res) => {
  try {
    const data = await readData();
    const { id } = req.params;
    const body = req.body;

    const index = data.findIndex(p => p.id === id || p.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "Proverb not found" });
    }

 else{
   data[index] = { ...data[index], ...body };
   await writeData(data);
   res.status(200).json(data[index]);
 }
  } catch (error) {
    console.error("Error updating proverb:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// DELETE a proverb
export const remove = async (req, res) => {
  const data = await readData();
  const { id } = req.params;

  const filtered = data.filter(item => String(item.id).trim() !== String(id).trim());

  if (filtered.length === data.length) {
    res.status(404).json({ message: "Proverb not found" });
  } else {
    await writeData(filtered);
    res.json({ message: "Proverb deleted" });
  }
};

