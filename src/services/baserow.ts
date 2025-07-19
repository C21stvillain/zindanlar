import { BaserowMonster } from "@/types/baserow";

const API_URL = "https://api.baserow.io/api/database/rows/table/598566/1/?user_field_names=true";
const AUTH_TOKEN = "f3IkTZcR0OYR2RvXlhe8nGRvWoATW4Hz";

export const getMonster = async (): Promise<BaserowMonster> => {
    const response = await fetch(API_URL, {
        headers: {
            Authorization: `Token ${AUTH_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch monster data");
    }

    const data = await response.json();
    return data;
};

export const addEmail = async (email: string): Promise<void> => {
    const response = await fetch("https://api.baserow.io/api/database/rows/table/613578/?user_field_names=true", {
        method: 'POST',
        headers: {
            'Authorization': `Token ${AUTH_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "field_4983759": email
        })
    });

    if (!response.ok) {
        throw new Error("Failed to add email");
    }
};