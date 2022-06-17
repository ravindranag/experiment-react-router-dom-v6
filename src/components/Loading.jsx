import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
    return (
        <div
            style={{
                width: '100%'
            }}
        >
            <h3>Now Loading</h3>
            <LinearProgress />
        </div>
    );
}
 
export default Loading;