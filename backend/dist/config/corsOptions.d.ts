type CorsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;
    optionsSuccessStatus: number;
};
declare const corsOptions: CorsOptions;
export default corsOptions;
