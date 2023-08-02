'use client';

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("bd230441-b0d4-46c9-ac9d-8fd254deb4fc");
    }, []);

    return null;
}