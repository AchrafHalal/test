<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as Middleware;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string|null
     */
    protected $proxies = '*'; // You can also use `null` if you want

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = 0; // This disables all forwarded headers
}
