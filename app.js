// app.js

// Emotion Analysis Algorithm for the Roaya Emotions Application

// A simple function to analyze the sentiment of a given text.
function analyzeEmotion(text) {
    // In a real-world application, you could use an NLP library or API
    const emotions = {
        positive: /happy|joy|love|excited/i,
        negative: /sad|angry|hate|frustrated/i,
        neutral: /okay|fine|meh/i
    };
    
    let score = { positive: 0, negative: 0 };

    // Analyze the text
    if (emotions.positive.test(text)) {
        score.positive++;
    }
    if (emotions.negative.test(text)) {
        score.negative++;
    }

    // Return the score or emotion detected
    if (score.positive > score.negative) {
        return 'Positive Emotion Detected';
    } else if (score.negative > score.positive) {
        return 'Negative Emotion Detected';
    } else {
        return 'Neutral Emotion Detected';
    }
}

// Example usage
const exampleText = 'I am so happy about this project!';
console.log(analyzeEmotion(exampleText));
