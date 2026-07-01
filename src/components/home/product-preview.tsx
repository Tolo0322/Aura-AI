"use client";
import { Sparkles } from "lucide-react";
import { useState } from "react";




export function ProductPreview() {

    const [mode, setMode] = useState("correction");
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState("");

    const handleModeChange = (newMode: string) => {
        setMode(newMode);
        setResult("");
    }

    const handleclick = ({inputText}: {inputText: string}) => {
        if (inputText.trim() === "") {
            alert("Por favor, ingresa un texto antes de generar el resultado.");
            return;
        }


        let contain = "";

        if (mode === "correction") {
            contain = "Corregir el siguiente texto: " + inputText;
        }else if (mode === "improve") {
            contain = "Mejorar el siguiente texto: " + inputText;
        }else if (mode === "summarize") {
            contain = "Resumir el siguiente texto: " + inputText;
        }else if (mode === "ideas") {
            contain = "Generar ideas a partir del siguiente texto: " + inputText;
        }
        return setResult(contain);
    }


    return (
        <section className="w-full max-w-7xl " >
            <div className="flex flex-col items-center justify-center bg-surface gap-6 text-center w-10/12   mx-auto p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap items-center justify-center gap-1 text-center p-0.5 px-0.5 border rounded-2xl border-gray-700 bg-neutral-800">
                    <button 
                        className={`
                            rounded-xl px-3 py-1 
                            hover:bg-neutral-700 hover:text-white
                            active:bg-neutral-700 active:border-b active:text-white
                            focus:outline-none focus:border-b focus:bg-neutral-700
                            transition-all duration-150
                            ${mode === "correction" 
                                ? 'bg-neutral-700 text-white border-b border-b-white' 
                                : ''
                            }
                        `}
                        onClick={() => handleModeChange("correction")}
                    >
                        CORREGIR
                    </button>
                    
                    <button 
                        className={`
                            rounded-xl px-3 py-1 
                            hover:bg-neutral-700 hover:text-white
                            active:bg-neutral-700 active:border-b active:text-white
                            focus:outline-none focus:border-b focus:bg-neutral-700
                            transition-all duration-150
                            ${mode === "improve" 
                                ? 'bg-neutral-700 text-white border-b border-b-white' 
                                : ''
                            }
                        `}
                        onClick={() => handleModeChange("improve")}
                    >
                        MEJORAR
                    </button>
                    
                    <button 
                        className={`
                            rounded-xl px-3 py-1 
                            hover:bg-neutral-700 hover:text-white
                            active:bg-neutral-700 active:border-b active:text-white
                            focus:outline-none focus:border-b focus:bg-neutral-700
                            transition-all duration-150
                            ${mode === "summarize" 
                                ? 'bg-neutral-700 text-white border-b border-b-white' 
                                : ''
                            }
                        `}
                        onClick={() => handleModeChange("summarize")}
                    >
                        RESUMIR
                    </button>
                    
                    <button 
                        className={`
                            rounded-xl px-3 py-1 
                            hover:bg-neutral-700 hover:text-white
                            active:bg-neutral-700 active:border-b active:text-white
                            focus:outline-none focus:border-b focus:bg-neutral-700
                            transition-all duration-150
                            ${mode === "ideas" 
                                ? 'bg-neutral-700 text-white border-b border-b-white' 
                                : ''
                            }
                        `}
                        onClick={() => handleModeChange("ideas")}
                    >
                        IDEAS
                    </button>
                </div>               
                <div className="flex flex-col items-start justify-center gap-2 text-start  w-full m-10 ">
                    <label>Texto de entrada</label>
                    <textarea 
                        onChange={(e) => setInputText(e.target.value)} 
                        value={inputText}
                        className="w-full h-32 bg-black placeholder:text-gray-700 placeholder:italic px-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary custom-scrollbar " placeholder="Escribe o pega tu texto aquí para comenzar a transformarlo con Aura AI...">
                        </textarea>
                    <button 
                        onClick={() => handleclick({ inputText })}
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary-hover text-secondary-foreground font-bold py-2 px-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary">Generar <Sparkles size={20} />
                    </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 text-center w-full">
                    <label>Resultado</label>
                    <textarea value={result} readOnly className="w-full h-32 bg-neutral-800 placeholder:text-gray-700 placeholder:italic px-2 border border-gray-700 rounded-md shadow-sm" placeholder="Aquí aparecerá el resultado de la transformación de tu texto...">
                    </textarea>
                </div>
            </div>
        </section>
    )
}