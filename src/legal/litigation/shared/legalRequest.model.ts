export class LegalRequest {
    division: string = '';
    service: string = '';
    subject: string = '';
    briefDescp: string = '';
    questionnaire: Question[] = [];
    attachments: Attachment[] = [];
    applicantName: string = '';
    requestDateTime: string = '';
    department: string = '';
    signature: string = '';
}

export class Question {
    question: string = '';
    answer: string = '';
    comments: string = '';
}

export class Attachment {
    fileName: string = '';
    fileContent: string = '';
}