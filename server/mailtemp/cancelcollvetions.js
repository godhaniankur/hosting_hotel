const cancelownership = (hotelName,ownerName) =>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cancellation Notice</title>
    <style>
        body {
            background-color: #f3f4f6;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        h1 {
            font-size: 24px;
            font-weight: bold;
            color: #2d3748;
        }
        p {
            margin-top: 16px;
            color: #4a5568;
            line-height: 1.6;
        }
        .signature {
            margin-top: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cancellation Notice</h1>
        <p>
            Dear ${ownerName},
        </p>
        I hope this message finds you well. I am writing to formally inform you of our decision to terminate the collaboration between hotelhub and ${hotelName} regarding the hotel management system project.
        <p>
            This decision was made after careful consideration and due to [specific reason, if any]. We appreciate the efforts and cooperation your team has provided so far.
        </p>
        <p>
            Please let us know how we can assist in ensuring a smooth transition. We value the relationship we have built and look forward to the possibility of working together in the future under different circumstances.
        </p>
        <p>
            Thank you for your understanding.
        </p>
        <p class="signature">
            Best regards,<br>
            HR,<br>
            Hotelhub<br>
            +91 6355434789
        </p>
    </div>
</body>
</html>`
}

module.exports = cancelownership;