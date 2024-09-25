import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

export interface NameFormProps {
    save: (input: string) => void;
}
export const NameForm: React.FC<NameFormProps> = ({ save }: NameFormProps) => {
    const [name, setName] = useState("");
    return (
        <Box style={{ background: "white", display: "flex", flexDirection: "column", padding: "10px", borderRadius: "10px", width: "300px"}}> 
            <Input placeholder="Please enter your nickname" onChange={(e) => setName(e.target.value)} />
            <Button style={{marginTop: "10px"}} variant="contained" onClick={() => save(name)}>Save</Button>
        </Box>
    );
}