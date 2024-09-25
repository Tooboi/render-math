import { useState } from 'react';

export default function AnimationCalculator() {
    const [totalFrames, setTotalFrames] = useState('');
    const [framesPerSecond, setFramesPerSecond] = useState('');
    const [totalMinutes, setTotalMinutes] = useState('');
    const [totalSeconds, setTotalSeconds] = useState('');
    const [result, setResult] = useState(null);
    const [mode, setMode] = useState('calculateTime'); // 'calculateFrames' or 'calculateTime'

    const handleCalculate = (e) => {
        e.preventDefault();

        if (mode === 'calculateTime') {
            // Calculate total time from frames
            const totalSeconds = totalFrames / framesPerSecond;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = Math.floor(totalSeconds % 60);
            setResult({ minutes, seconds });
        } else if (mode === 'calculateFrames') {
            // Calculate total frames from time
            const totalTimeInSeconds = parseInt(totalMinutes) * 60 + parseInt(totalSeconds);
            const frames = totalTimeInSeconds * framesPerSecond;
            setResult({ frames });
        }
    };

    return (
        <div className="mx-auto max-w-3xl md:px-4 lg:px-10 pt-4 pb-6 px-4 lg:pt-16 min-h-screen transition-all">
            <section className="bg-stone-800 rounded-lg border-2 border-stone-700">
                <div className="py-8 px-4 mx-auto max-w-2xl">
                    <h2 className="mb-1 text-xl font-bold text-stone-300">Animation Duration & Frame Calculator</h2>
                    <h2 className="mb-6 text-md font-regular text-stone-300">Calculate animation duration or total frames based on total time</h2>

                    <div className="flex mb-4">
                        <button
                            className={`btn mr-2 ${mode === 'calculateTime' ? 'btn-secondary rounded-lg' : 'btn-primary btn-outline rounded-lg'}`}
                            onClick={() => setMode('calculateTime')}
                        >
                            Total Time
                        </button>
                        <button
                            className={`btn ${mode === 'calculateFrames' ? 'btn-secondary rounded-lg' : 'btn-primary btn-outline rounded-lg'}`}
                            onClick={() => setMode('calculateFrames')}
                        >
                            Total Frames
                        </button>
                    </div>

                    <form onSubmit={handleCalculate}>
                        {mode === 'calculateTime' && (
                            <>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
                                            <span className="label-text">Frames Per Second</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="framesPerSecond"
                                            id="framesPerSecond"
                                            placeholder="In FPS"
                                            className="input input-primary w-full max-w-xs rounded-lg"
                                            onChange={(e) => setFramesPerSecond(Number(e.target.value))}
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        {mode === 'calculateFrames' && (
                            <>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Total Minutes</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="totalMinutes"
                                            id="totalMinutes"
                                            placeholder="0"
                                            className="input input-primary w-full max-w-xs rounded-lg"
                                            onChange={(e) => setTotalMinutes(e.target.value)}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Total Seconds</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="totalSeconds"
                                            id="totalSeconds"
                                            placeholder="0"
                                            className="input input-primary w-full max-w-xs rounded-lg"
                                            onChange={(e) => setTotalSeconds(e.target.value)}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Frames Per Second</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="framesPerSecond"
                                            id="framesPerSecond"
                                            placeholder="In FPS"
                                            className="input input-primary w-full max-w-xs rounded-lg"
                                            onChange={(e) => setFramesPerSecond(Number(e.target.value))}
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        <button type="submit" className="mt-8 btn btn-secondary rounded-lg">
                            Calculate
                        </button>
                    </form>

                    {result !== null && (
                        <div className="mt-6">
                            {mode === 'calculateTime' && (
                                <h3 className="text-lg font-semibold text-stone-300">
                                    Total Animation Duration: {result.minutes} minutes and {result.seconds} seconds
                                </h3>
                            )}
                            {mode === 'calculateFrames' && (
                                <h3 className="text-lg font-semibold text-stone-300">
                                    Total Frames: {result.frames}
                                </h3>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
