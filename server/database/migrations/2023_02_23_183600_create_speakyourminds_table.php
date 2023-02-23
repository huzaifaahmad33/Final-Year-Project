<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('speakyourminds', function (Blueprint $table) {
            $table->id('sym_id');
            $table->string('sym_name');
            $table->string('sym_email');
            $table->string('sym_city');
            $table->text('sym_message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('speakyourminds');
    }
};
