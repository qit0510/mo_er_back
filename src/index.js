import dva from 'dva';
import './index.css';
import 'ant-design-pro/dist/ant-design-pro.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/header').default);

app.model(require('./models/pageheader').default);

app.model(require('./models/topic').default);

app.model(require('./models/article').default);

app.model(require('./models/user').default);

app.model(require('./models/tags').default);

app.model(require('./models/column').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
