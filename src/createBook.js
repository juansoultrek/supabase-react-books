import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar';
import { useState } from "react";
import { supabase } from "./supabaseClient";

function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [datePurchased, setDatePurchased] = useState("");
    const [dateFinishedReading, setDateFinishedReading] = useState("");
    const [format, setFormat] = useState("");
    const [personalNotes, setPersonalNotes] = useState("");

    console.log(format);

    async function handleCreateBook() {
        try {
            const { data, error } = await supabase
                .from("readbooks")
                .insert({
                    title,
                    author,
                    genre,
                    description,
                    date_purchased: datePurchased,
                    date_finished_reading: dateFinishedReading,
                    format,
                    personal_notes: personalNotes
                })
                .single();
            if (error) throw error;
        } catch (error) {
            console.log("This is the error:" + error.message);
        }
    }

    return (
        <>
            <div>
                <NavBar /> {/* Include the NavBar component */}
                {/* Your "Create" page content */}
                <button onClick={handleCreateBook}>Create Book</button>
            </div>
        </>
    );
}

export default CreateBook;
