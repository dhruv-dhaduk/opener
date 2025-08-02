import { linksAtom } from '@/state';
import { useAtom } from 'jotai';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';

export function LinksEditor() {
    const [links, setLinks] = useAtom(linksAtom);

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">Edit Links</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                    </DialogDescription>
                </DialogHeader>

                <div className="max-h-[60dvh] overflow-y-auto">
                    {/* Add new link */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Add new link"
                            onKeyDown={(e) => {
                                if (
                                    e.key === 'Enter' &&
                                    e.currentTarget.value
                                ) {
                                    setLinks([...links, e.currentTarget.value]);
                                    e.currentTarget.value = '';
                                }
                            }}
                            className="p-2 border rounded w-full"
                        />
                    </div>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={link}
                                    onChange={(e) => {
                                        const newLinks = [...links];
                                        newLinks[index] = e.target.value;
                                        setLinks(newLinks);
                                    }}
                                    className="flex-1 p-2 border rounded"
                                />
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        setLinks(
                                            links.filter((_, i) => i !== index)
                                        );
                                    }}
                                >
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
