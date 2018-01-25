export class Inbox {
    messageId: number;
    circleName: string;
    messageDate: Date;
    messageType: string;
    reciverEmailId: string;
    senderEmailId: string;
    textMessage: string;
}
    export class  CommonMessage {
        circleName: string;
        reciverEmailId: string;
        inbox: Inbox[];
    }
