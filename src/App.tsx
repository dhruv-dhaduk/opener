import { useAtom } from 'jotai';
import { LinksEditor } from './components/LinksEditor';
import { Button } from './components/ui/button';
import { linksAtom } from './state';

function App() {
    const [links] = useAtom(linksAtom);
    return (
        <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
            <Button
                onClick={() => {
                    links.forEach((link) => {
                        window.open(link, '_blank');
                    });
                }}
            >
                Open
            </Button>
            <LinksEditor />
        </div>
    );
}

export default App;
