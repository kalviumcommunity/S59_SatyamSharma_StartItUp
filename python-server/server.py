import os
from flask import Flask, request, jsonify
from transformers import AutoTokenizer
import onnxruntime as ort

app = Flask(__name__)

tokenizer = AutoTokenizer.from_pretrained("gpt2")

model_path = "gpt2.onnx"  
ort_session = ort.InferenceSession(model_path)

def generate_text(prompt, max_length=50, num_return_sequences=1):
    inputs = tokenizer(prompt, return_tensors="np")
    input_ids = inputs["input_ids"]

    outputs = ort_session.run(None, {"input_ids": input_ids})[0]
    
    generated_texts = []
    for i in range(num_return_sequences):
        generated_ids = outputs[i, :max_length]
        generated_texts.append(tokenizer.decode(generated_ids, skip_special_tokens=True))
    
    return generated_texts

@app.route('/generate', methods=['POST'])
def generate():
    try:
        input_data = request.get_json()
        prompt = input_data['prompt']
        max_length = input_data.get('max_length', 50)
        num_return_sequences = input_data.get('num_return_sequences', 1)

        generated_texts = generate_text(prompt, max_length=max_length, num_return_sequences=num_return_sequences)

        return jsonify(generated_texts)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 1300))
    app.run(host='0.0.0.0', port=port)
