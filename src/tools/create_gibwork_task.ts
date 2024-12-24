import { SolanaAgentKit } from "../index";

/**
 * Create a task on Gibwork using their public transaction API
 * @param agent SolanaAgentKit instance
 * @param title Task title
 * @param content Task description content
 * @param requirements Task requirements
 * @param tags Array of tags for the task
 * @param payer Payer address
 * @param tokenMintAddress Token mint address for payment
 * @param tokenAmount Payment amount
 * @returns Response containing the task creation transaction and the taskId
 */
export async function create_gibwork_task(
    agent: SolanaAgentKit,
    title: string,
    content: string,
    requirements: string,
    tags: string[],
    tokenMintAddress: string,
    tokenAmount: number,
    payer?: string,
) {
    try {
        const response = await fetch('https://api2.gib.work/tasks/public/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
                requirements,
                tags,
                payer: payer || agent.wallet.publicKey.toBase58(),
                token: {
                    mintAddress: tokenMintAddress,
                    amount: tokenAmount
                }
            })
        });

        const data = await response.json();

        return {
            success: true,
            taskId: data.taskId,
            serializedTransaction: data.serializedTransaction
        };
    } catch (error: any) {
        throw new Error(`Error creating Gibwork task: ${error.message}`);
    }
}