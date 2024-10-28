type CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void,
  ) => void;
  optionsSuccessStatus: number;
};

const allowedOrigin: string[] = [
  'http://localhost:5173',
  'https://test-fullstack-projeto-fusion.pages.dev',
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
