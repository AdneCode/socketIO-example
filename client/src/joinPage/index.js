import { useState } from 'react';
import { Button } from './button';

export function JoinPage() {
    const [name, setName] = useState('');
    return (
        <>
            <Button />
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
}
