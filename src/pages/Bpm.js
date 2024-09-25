import { useState } from 'react';

export default function BpmToFramesConverter() {
    const [bpm, setBpm] = useState('');
    const [fps, setFps] = useState('');
    const [framesPerBeat, setFramesPerBeat] = useState(null);
    const [framesPerBar, setFramesPerBar] = useState(null);
    const [timeSignature, setTimeSignature] = useState('4/4'); // Default to 4/4 time

    const handleSubmit = (e) => {
        e.preventDefault();

        const beatsPerBar = timeSignature === '3/4' ? 3 : 4; // Support 3/4 and 4/4 for now
        const secondsPerBeat = 60 / bpm;
        const framesBeat = fps * secondsPerBeat;
        const framesBar = framesBeat * beatsPerBar;

        setFramesPerBeat(framesBeat);
        setFramesPerBar(framesBar);
    };

    return (
        <div className="mx-auto max-w-3xl md:px-4 lg:px-10 pt-4 pb-6 px-4 min-h-screen">
            <section className="bg-stone-800 rounded-lg border-2 border-stone-700">
                <div className="py-8 px-4 mx-auto max-w-2xl">
                    <h2 className="mb-1 text-xl font-bold text-stone-300">BPM to Frames Converter</h2>
                    <h2 className="mb-6 text-md font-regular text-stone-300">Convert Beats Per Minute (BPM) to Frames Per Second (FPS)</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Beats Per Minute (BPM)</span>
                                </div>
                                <input
                                    type="number"
                                    name="bpm"
                                    id="bpm"
                                    placeholder="0"
                                    className="input input-primary w-full max-w-xs rounded-lg"
                                    onChange={(e) => setBpm(Number(e.target.value))}
                                />
                            </label>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Frames Per Second (FPS)</span>
                                </div>
                                <input
                                    type="number"
                                    name="fps"
                                    id="fps"
                                    placeholder="0"
                                    className="input input-primary w-full max-w-xs rounded-lg"
                                    onChange={(e) => setFps(Number(e.target.value))}
                                />
                            </label>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Time Signature</span>
                                </div>
                                <select
                                    className="select select-primary w-full max-w-xs rounded-lg"
                                    value={timeSignature}
                                    onChange={(e) => setTimeSignature(e.target.value)}
                                >
                                    <option value="4/4">4/4</option>
                                    <option value="3/4">3/4</option>
                                </select>
                            </label>
                        </div>

                        <button type="submit" className="mt-8 btn btn-secondary rounded-lg">
                            Calculate
                        </button>
                    </form>

                    {framesPerBeat !== null && framesPerBar !== null && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-stone-300">
                                Frames Per Beat: {framesPerBeat.toFixed(2)}
                            </h3>
                            <h3 className="text-lg font-semibold text-stone-300">
                                Frames Per Bar: {framesPerBar.toFixed(2)}
                            </h3>
                            <h3 className="text-lg font-semibold text-stone-300">
                                Frames Per 4 Bars: {framesPerBar.toFixed(2)*4}
                            </h3>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
