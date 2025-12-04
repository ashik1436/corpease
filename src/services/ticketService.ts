import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface TicketData {
    name: string;
    phone: string;
    email: string;
    service: string;
    description: string;
}

export const createSupportTicket = async (data: TicketData) => {
    try {
        const user = auth.currentUser;

        // Allow guest tickets
        const userId = user ? user.uid : 'guest';

        const ticketRef = collection(db, 'support_tickets_web');

        const docRef = await addDoc(ticketRef, {
            ...data,
            userId: userId,
            status: 'open',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            senderType: user ? 'user' : 'guest'
        });

        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error creating ticket:", error);
        throw error;
    }
};
