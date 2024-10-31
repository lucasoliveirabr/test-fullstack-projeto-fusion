type CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void,
  ) => void;
  optionsSuccessStatus: number;
};

const allowedOrigin = process.env.NODE_ENV === 'production'
  ? 'https://test-fullstack-projeto-fusion.pages.dev'
  : 'http://localhost:5173';

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
