import torch
from transformers import GPT2Model

model = GPT2Model.from_pretrained("gpt2")
model.eval()

dummy_input = torch.ones(1, 1, dtype=torch.long)

torch.onnx.export(
    model,
    dummy_input,
    "gpt2.onnx",
    input_names=["input_ids"],
    output_names=["output"],
    opset_version=11
)
