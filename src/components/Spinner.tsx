import { overrideSpinner } from "@/utilities";
import { useState } from "react";
import { PacmanLoader } from "react-spinners/";
import { useStore } from '@/hooks';

export const Spinner = ({ loading = true, color = '#F2D648' }) => {


    return (
        <div className="sweet-loading">
            {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
            {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            <PacmanLoader
                color={color}
                loading={loading}
                cssOverride={overrideSpinner}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}