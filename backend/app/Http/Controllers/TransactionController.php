<?php

namespace App\Http\Controllers;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required|numeric',
            'category' => 'required|string|max:255',
            'type' => 'required|in:income,expense',
            'date' => 'required|date',
            'description' => 'nullable|string',
        ]);

        $transaction = Transaction::create($validated);

        return response()->json([
            'message' => 'Transaction stored successfully',
            'transaction' => $transaction
        ], 201);
    }    
}
