import { useState } from 'react';

export default function Remaining() {
    const [elapsed, setElapsed] = useState(0);
    const [totalFrames, setTotalFrames] = useState(0);
    const [timePerFrame, setTimePerFrame] = useState(0);
    const [remainingTime, setRemainingTime] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const remainingFrames = totalFrames - elapsed;
        const timeInSeconds = remainingFrames * timePerFrame;
        const timeInHours = timeInSeconds / 3600;
        setRemainingTime(timeInHours);
    };

    return (
        <div className="mx-auto max-w-3xl md:px-4 lg:px-10 pt-4 pb-6 px-4 lg:pt-16 min-h-screen transition-all">
            <section className="bg-stone-800 rounded-lg border-2 border-stone-700">
                <div className="py-8 px-4 mx-auto max-w-2xl">
                    <h2 className="mb-1 text-xl font-bold text-stone-300">Time Remaining</h2>
                    <h2 className="mb-6 text-md font-regular text-stone-300">How much longer will my animation take to finish rendering</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Elapsed Frames</span>
                                </div>
                                <input
                                    type="number"
                                    name="elapsed"
                                    id="elapsed"
                                    placeholder="0"
                                    className="input input-primary w-full max-w-xs rounded-lg"
                                    onChange={(e) => setElapsed(Number(e.target.value))}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Total Frames</span>
                                </div>
                                <input
                                    type="number"
                                    name="totalFrames"
                                    id="totalFrames"
                                    placeholder="0"
                                    className="input input-primary w-full max-w-xs rounded-lg"
                                    onChange={(e) => setTotalFrames(Number(e.target.value))}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Average Time / Frame (seconds)</span>
                                </div>
                                <input
                                    type="number"
                                    name="timePerFrame"
                                    id="timePerFrame"
                                    placeholder="In seconds"
                                    className="input input-primary w-full max-w-xs rounded-lg"
                                    onChange={(e) => setTimePerFrame(Number(e.target.value))}
                                />
                            </label>
                        </div>
                        <button type="submit" className="mt-8 btn btn-secondary rounded-lg">
                            Calculate
                        </button>
                    </form>

                    {remainingTime !== null && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-stone-300">
                                Estimated Time Remaining: {remainingTime.toFixed(2)} hours
                            </h3>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
